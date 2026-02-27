import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import ReviewView from "../components/ReviewView";
import { addHistory, getLatestResult, saveLatestResult } from "../services/api";

const Result = () => {
  const { state, dispatch } = useQuiz();
  const { session, currentCourse } = state;
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [showReview, setShowReview] = useState(false);

  /* Fixed: Use useRef to prevent double execution in Strict Mode */
  const processedRef = React.useRef(false);

  useEffect(() => {
    const loadOrCalculateStats = async () => {
      // Prevent double execution
      if (processedRef.current) return;

      if (!session.active && !stats) {
        processedRef.current = true;
        if (!currentCourse?.id) {
          navigate("/");
          return;
        }
        const saved = await getLatestResult(currentCourse.id);
        if (saved) {
          setStats(saved);
        } else {
          navigate("/");
        }
        return;
      }

      if (session.active && !stats) {
        processedRef.current = true;
        let score = 0;
        let incorrect = 0;
        let unanswered = 0;
        const total = session.questions.length;

        session.questions.forEach((q) => {
          const userAns = session.answers[q.id] || [];
          const userAnsStr = userAns.sort().join("");
          const correctAnsStr = (q.correct_response || []).sort().join("");

          if (userAns.length === 0) {
            unanswered++;
          } else if (userAnsStr === correctAnsStr) {
            score++;
          } else {
            incorrect++;
          }
        });

        const percent = Math.round((score / total) * 100);
        const duration = (session.endTime || new Date()) - session.startTime;

        // Slim down questions to only include fields needed for review
        // This significantly reduces history.json file size
        const slimQuestions = session.questions.map((q) => {
          const badges = session.questionBadges?.[q.id] || {};
          return {
            id: q.id,
            correct_response: q.correct_response,
            source: q.source,
            isNew: badges.isNew || false,
            isAlwaysIncorrect: badges.isAlwaysIncorrect || false,
            prompt: {
              question: q.prompt.question,
              answers: q.prompt.answers,
              explanation: q.prompt.explanation,
            },
          };
        });

        const resultData = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          course: currentCourse ? currentCourse.id : "Unknown",
          mode: session.mode,
          sourceLabel: session.sourceLabel || null,
          score,
          incorrect,
          unanswered,
          total,
          percent,
          duration,
          questions: slimQuestions,
          answers: session.answers,
        };

        setStats(resultData);

        // Save to API (with localStorage fallback)
        const courseId = currentCourse ? currentCourse.id : "Unknown";
        await addHistory(resultData, courseId);
        await saveLatestResult(resultData, courseId);
      }
    };

    loadOrCalculateStats();
  }, [session, stats, navigate, currentCourse]);

  if (!stats) return null;

  if (showReview) {
    return (
      <div className="h-[calc(100vh-80px)] w-full flex flex-col">
        <div className="px-6 py-2 flex items-center justify-between bg-bg-card border-b border-white/10 shrink-0">
          <h2 className="text-xl font-bold">Review Attempt</h2>
          <button
            className="text-primary hover:text-white transition-colors flex items-center gap-2"
            onClick={() => setShowReview(false)}
          >
            <i className="fa-solid fa-xmark"></i> Close Review
          </button>
        </div>
        <ReviewView
          questions={stats.questions}
          answers={stats.answers}
          readOnly={true}
          isHistoryShow={true}
        />
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 animate-fade-in flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-text-muted bg-clip-text text-transparent mb-12">
        Exam Results
      </h1>

      <div className="text-center bg-bg-card p-12 rounded-2xl border border-white/5 shadow-2xl w-full max-w-lg">
        {/* Score Circle */}
        <div
          className="w-48 h-48 rounded-full border-8 border-bg-card mx-auto mb-8 flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          style={{
            background: `conic-gradient(${stats.percent >= 75 ? "#10b981" : "#ef4444"} ${stats.percent * 3.6}deg, #334155 0)`,
          }}
        >
          <div className="absolute w-[170px] h-[170px] bg-bg-dark rounded-full flex flex-col items-center justify-center z-10">
            <span
              className={`text-5xl font-extrabold ${stats.percent >= 75 ? "text-success" : "text-danger"}`}
            >
              {stats.percent}%
            </span>
            <span className="text-text-muted text-sm uppercase tracking-wide mt-1">
              Score
            </span>
          </div>
        </div>

        <h2
          className={`text-3xl font-bold mb-8 ${stats.percent >= 75 ? "text-success" : "text-danger"}`}
        >
          {stats.percent >= 75
            ? "PASSED! Great job."
            : "FAILED. Keep practicing."}
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-green-500/10 border border-success/20">
            <div className="text-2xl font-bold text-success">{stats.score}</div>
            <div className="text-xs uppercase text-text-muted">Correct</div>
          </div>
          <div className="p-4 rounded-lg bg-red-500/10 border border-danger/20">
            <div className="text-2xl font-bold text-danger">
              {stats.incorrect}
            </div>
            <div className="text-xs uppercase text-text-muted">Incorrect</div>
          </div>
          <div className="p-4 rounded-lg bg-yellow-500/10 border border-warning/20">
            <div className="text-2xl font-bold text-warning">
              {stats.unanswered}
            </div>
            <div className="text-xs uppercase text-text-muted">Skipped</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            className="bg-white/10 text-white border border-white/10 py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all text-lg w-full flex items-center justify-center gap-2"
            onClick={() => setShowReview(true)}
          >
            <i className="fa-solid fa-list-check"></i> Review Answers
          </button>

          <button
            className="bg-primary text-white shadow-lg shadow-primary/30 py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all text-lg w-full"
            onClick={() => {
              dispatch({ type: "RESET_SESSION" });
              navigate("/");
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
