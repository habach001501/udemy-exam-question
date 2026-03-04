import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import ReviewView from "../components/ReviewView";
import { getHistory } from "../services/api";
import { courses } from "../config";

const WeakReview = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const courseFilter = searchParams.get("course");
  const dateFilter = searchParams.get("date");
  const { dispatch } = useQuiz();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(null); // null = selection, 'study' = ReviewView, 'practice-setup' = config, 'practice' dispatches to quiz
  const [practiceCount, setPracticeCount] = useState(25);
  const [mixMode, setMixMode] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      setLoading(true);
      const h = await getHistory(courseFilter || courses[0]?.id);
      setHistory(h);
      setLoading(false);
    };
    loadHistory();
  }, [courseFilter]);

  // Apply the same date filter as History.jsx
  const filteredHistory = useMemo(() => {
    if (!dateFilter) return history;
    const startOfDay = new Date(dateFilter);
    startOfDay.setHours(0, 0, 0, 0);
    return history.filter((h) => new Date(h.date) >= startOfDay);
  }, [history, dateFilter]);

  // Compute question results across filtered attempts
  const questionStats = useMemo(() => {
    const results = {};
    filteredHistory.forEach((h) => {
      (h.questions || []).forEach((q) => {
        const userAnswer = h.answers?.[q.id] || [];
        const correctAnswer = q.correct_response || [];
        const isCorrect =
          JSON.stringify([...userAnswer].sort()) ===
          JSON.stringify([...correctAnswer].sort());
        if (!results[q.id]) {
          results[q.id] = {
            correct: 0,
            incorrect: 0,
            question: q,
            lastAnswer: userAnswer,
          };
        }
        if (isCorrect) {
          results[q.id].correct++;
        } else {
          results[q.id].incorrect++;
        }
        results[q.id].lastAnswer = userAnswer;
        results[q.id].question = q;
      });
    });
    return results;
  }, [filteredHistory]);

  // Build weak questions (correctCount <= incorrectCount)
  const { weakQuestions, weakAnswers } = useMemo(() => {
    const questions = [];
    const answers = {};
    Object.entries(questionStats).forEach(([id, stat]) => {
      if (stat.correct <= stat.incorrect && stat.question.source) {
        questions.push(stat.question);
        answers[id] = stat.lastAnswer;
      }
    });
    return { weakQuestions: questions, weakAnswers: answers };
  }, [questionStats]);

  // Build non-weak questions (correct > incorrect) for mix mode
  const nonWeakQuestions = useMemo(() => {
    const questions = [];
    Object.entries(questionStats).forEach(([, stat]) => {
      if (stat.correct > stat.incorrect && stat.question.source) {
        questions.push(stat.question);
      }
    });
    return questions;
  }, [questionStats]);

  const handleStartStudy = () => {
    setMode("study");
  };

  // Fisher-Yates shuffle
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleStartPractice = () => {
    // Set the current course so Result.jsx can save history correctly
    const courseId = courseFilter || courses[0]?.id;
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      dispatch({ type: "SET_COURSE", payload: course });
    }

    let questionsToUse;
    let sourceLabel;

    if (mixMode && nonWeakQuestions.length > 0) {
      // Mix mode: 50/50 split — half weak, half non-weak, redistribute surplus
      const totalCount = practiceCount;
      let weakSlots = Math.min(Math.ceil(totalCount / 2), weakQuestions.length);
      let nonWeakSlots = Math.min(
        totalCount - weakSlots,
        nonWeakQuestions.length,
      );
      // If non-weak can't fill its half, give surplus back to weak
      const remaining = totalCount - weakSlots - nonWeakSlots;
      if (remaining > 0) {
        weakSlots = Math.min(weakSlots + remaining, weakQuestions.length);
      }
      const shuffledWeak = shuffleArray(weakQuestions).slice(0, weakSlots);
      const shuffledNonWeak = shuffleArray(nonWeakQuestions).slice(
        0,
        nonWeakSlots,
      );
      questionsToUse = shuffleArray([...shuffledWeak, ...shuffledNonWeak]);
      sourceLabel = `Weak Mix-${questionsToUse.length} (${shuffledWeak.length}W+${shuffledNonWeak.length}S)`;
    } else {
      // Weak only — cap at weak questions count
      const count =
        Math.min(practiceCount, weakQuestions.length) || weakQuestions.length;
      questionsToUse = shuffleArray(weakQuestions).slice(0, count);
      sourceLabel = `Weak Review-${questionsToUse.length}`;
    }

    // Build set of weak question IDs so ExamView can show WEAK badges
    const weakIds = new Set(weakQuestions.map((q) => q.id));

    dispatch({
      type: "START_SESSION",
      payload: {
        mode: "exam",
        questions: questionsToUse,
        sourceLabel,
        weakQuestionIds: [...weakIds],
      },
    });
    navigate(`/quiz/${courseId}`);
  };

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto p-4 animate-fade-in bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Loading Weak Questions...
        </h1>
      </div>
    );
  }

  if (weakQuestions.length === 0) {
    return (
      <div className="h-[90vh] w-[95vw] mx-auto flex flex-col items-center justify-center gap-4 bg-white">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-800">Congratulations!</h2>
        <p className="text-gray-500">You have no weak questions!</p>
        <button
          className="mt-4 group flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 cursor-pointer"
          onClick={() => navigate("/history")}
        >
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
            <i className="fa-solid fa-arrow-left text-sm text-gray-500 group-hover:text-gray-700"></i>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
            Back to History
          </span>
        </button>
      </div>
    );
  }

  // Mode selection screen
  if (mode === null) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col h-[90vh] pb-0 animate-fade-in bg-white">
        {/* Header */}
        <div className="flex items-center gap-4 mt-6 mb-8">
          <button
            className="group flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 cursor-pointer"
            onClick={() => navigate("/history")}
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
              <i className="fa-solid fa-arrow-left text-sm text-gray-500 group-hover:text-gray-700"></i>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              Back
            </span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tight flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center border border-red-500/20">
                <i className="fa-solid fa-exclamation-triangle text-red-500 text-lg"></i>
              </span>
              Weak Questions
              <span className="px-2.5 py-1 rounded-lg text-xs bg-red-100 border border-red-200 text-red-600 font-bold">
                {weakQuestions.length} Questions
              </span>
            </h1>
            <p className="text-sm text-gray-500 mt-1 ml-[52px]">
              Questions where correct attempts ≤ incorrect attempts
            </p>
          </div>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <div
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
            onClick={handleStartStudy}
          >
            <div className="text-4xl mb-4 text-primary transition-transform">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Study Mode
            </h3>
            <p className="text-gray-500">
              Browse weak questions with answers and explanations visible
              immediately. Learn at your own pace.
            </p>
          </div>
          <div
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
            onClick={() => setMode("practice-setup")}
          >
            <div className="text-4xl mb-4 text-primary transition-transform">
              <i className="fa-solid fa-stopwatch"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Practice Mode
            </h3>
            <p className="text-gray-500">
              Timed exam simulation with only your weak questions. Test yourself
              under real conditions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Practice setup screen
  if (mode === "practice-setup") {
    const weakCount = weakQuestions.length;
    const availableNonWeak = nonWeakQuestions.length;
    const maxTotal = weakCount + availableNonWeak;
    // 50/50 split preview with redistribution
    let halfWeak = Math.min(Math.ceil(practiceCount / 2), weakCount);
    let halfNonWeak = Math.min(practiceCount - halfWeak, availableNonWeak);
    // Redistribute surplus
    const remaining = practiceCount - halfWeak - halfNonWeak;
    if (remaining > 0) {
      halfWeak = Math.min(halfWeak + remaining, weakCount);
    }

    return (
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col h-[90vh] pb-0 animate-fade-in bg-white">
        {/* Header */}
        <div className="flex items-center gap-4 mt-6 mb-8">
          <button
            className="group flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 cursor-pointer"
            onClick={() => setMode(null)}
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
              <i className="fa-solid fa-arrow-left text-sm text-gray-500 group-hover:text-gray-700"></i>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              Back
            </span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tight flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <i className="fa-solid fa-stopwatch text-primary text-lg"></i>
              </span>
              Configure Practice
            </h1>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 cursor-default">
          {/* Number of Questions */}
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-gray-700">
              Number of Questions
            </label>
            <input
              type="number"
              value={practiceCount}
              onChange={(e) =>
                setPracticeCount(Math.max(1, parseInt(e.target.value) || 1))
              }
              min="1"
              max={mixMode ? maxTotal : weakCount}
              className="w-full p-4 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
            <p className="text-xs text-gray-400 mt-2">
              <i className="fa-solid fa-info-circle mr-1"></i>
              {weakCount} weak + {availableNonWeak} strong available
            </p>
          </div>

          {/* Mix Mode Toggle */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">
              Question Mix
            </label>
            <div className="flex gap-3">
              <button
                className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  !mixMode
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                }`}
                onClick={() => setMixMode(false)}
              >
                <i className="fa-solid fa-fire mr-2"></i>
                Weak Only
                <span className="block text-xs mt-1 opacity-75">
                  {Math.min(practiceCount, weakCount)} weak questions
                </span>
              </button>
              <button
                className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  mixMode
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                } ${availableNonWeak === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                onClick={() => availableNonWeak > 0 && setMixMode(true)}
                disabled={availableNonWeak === 0}
              >
                <i className="fa-solid fa-shuffle mr-2"></i>
                Mix (50/50)
                <span className="block text-xs mt-1 opacity-75">
                  {availableNonWeak > 0
                    ? `${halfWeak} weak + ${halfNonWeak} strong`
                    : "No strong questions available"}
                </span>
              </button>
            </div>
            {mixMode && (
              <p className="text-xs text-gray-400 mt-2">
                <i className="fa-solid fa-info-circle mr-1"></i>
                {halfWeak} weak + {halfNonWeak} strong ={" "}
                {halfWeak + halfNonWeak} total, shuffled together
              </p>
            )}
          </div>

          <button
            className="bg-primary text-white shadow-lg shadow-primary/30 mt-4 py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all text-lg cursor-pointer"
            onClick={handleStartPractice}
          >
            Start Practice
          </button>
        </div>
      </div>
    );
  }

  // Study mode — ReviewView
  return (
    <div className="h-[90vh] w-[95vw] mx-auto flex flex-col gap-4 bg-white">
      {/* Header Block */}
      <div className="px-6 py-4 flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl shadow-lg shrink-0 mt-2">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center border border-red-500/20 shadow-inner">
            <i className="fa-solid fa-book-open text-red-500 text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-3">
              Weak Questions — Study Mode
              <span className="px-2 py-0.5 rounded text-[10px] bg-red-100 border border-red-200 text-red-600 uppercase tracking-wider">
                {weakQuestions.length} Questions
              </span>
            </h2>
            <div className="text-sm text-gray-500 mt-1">
              Questions where correct attempts ≤ incorrect attempts
            </div>
          </div>
        </div>

        <button
          className="group flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 cursor-pointer"
          onClick={() => setMode(null)}
        >
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
            <i className="fa-solid fa-arrow-left text-sm text-gray-500 group-hover:text-gray-700"></i>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
            Back to Mode Selection
          </span>
        </button>
      </div>

      {/* Main Content Block */}
      <div className="flex-1 overflow-hidden bg-gray-50 rounded-2xl border border-gray-200 shadow-inner relative">
        <ReviewView
          questions={weakQuestions}
          answers={weakAnswers}
          readOnly={true}
          isHistoryShow={true}
        />
      </div>
    </div>
  );
};

export default WeakReview;
