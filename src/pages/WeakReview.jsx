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
  const [mode, setMode] = useState(null); // null = selection, 'study' = ReviewView, 'practice' dispatches to quiz

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

    dispatch({
      type: "START_SESSION",
      payload: {
        mode: "exam",
        questions: shuffleArray(weakQuestions),
        sourceLabel: `Weak Review-${weakQuestions.length}`,
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
            onClick={handleStartPractice}
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
