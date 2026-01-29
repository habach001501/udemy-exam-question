import React, { memo, useMemo } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

// Tách Timer thành component riêng để chỉ re-render phần này mỗi giây
const Timer = memo(function Timer() {
  const { state } = useQuiz();
  const timeLeft = state.session.timeLeft;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-red-500/10 text-danger p-4 rounded-lg text-center text-2xl font-bold mb-4 border border-red-500/20 font-mono">
      {formatTime(timeLeft)}
    </div>
  );
});
const QuestionContent = memo(function QuestionContent({
  currentIndex,
  totalQuestions,
  currentQ,
  userAnswers,
  handleAnswer,
  onNavigate,
}) {
  return (
    <>
      <div className="flex justify-between mb-6 text-blue-800/60 text-sm font-bold uppercase tracking-wider">
        <span>
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span className="opacity-70">ID: #{currentQ.id}</span>
      </div>

      <div
        className="text-[20px] leading-relaxed mb-8 text-blue-900 font-bold [&>p]:mb-4 [&>img]:max-w-full [&>img]:rounded-xl [&>img]:border [&>img]:border-amber-200 [&>img]:my-6 [&>img]:shadow-md"
        dangerouslySetInnerHTML={{ __html: currentQ.prompt.question }}
      ></div>

      <div className="flex flex-col gap-4 mb-10">
        {currentQ.prompt.answers.map((ansHtml, idx) => {
          const letter = String.fromCharCode(97 + idx);
          const isSelected = userAnswers.includes(letter);
          return (
            <div
              key={idx}
              className={`flex text-[17px] gap-4 p-5 rounded-xl cursor-pointer transition-all duration-200 border-2
                                            ${isSelected ? "bg-primary/10 border-primary shadow-sm" : "bg-white/80 border-amber-200/50 hover:bg-amber-100/50 hover:border-amber-300/50 text-blue-900/80"}
                                        `}
              onClick={() =>
                handleAnswer(letter, currentQ.correct_response.length > 1)
              }
            >
              <div
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors
                                            ${isSelected ? "bg-primary border-primary text-white" : "border-blue-200 text-blue-300"}
                                        `}
              >
                {letter.toUpperCase()}
              </div>
              <div
                className={`flex-1 [&>p]:m-0 leading-normal ${isSelected ? "text-blue-900 font-bold" : "font-medium"}`}
                dangerouslySetInnerHTML={{ __html: ansHtml }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-auto pt-8 border-t border-amber-200/30">
        <button
          className="px-6 py-3 bg-white/50 text-blue-800/70 rounded-xl font-bold hover:bg-white/80 transition-all disabled:opacity-40 disabled:cursor-not-allowed border border-amber-200/50"
          disabled={currentIndex === 0}
          onClick={() => onNavigate(currentIndex - 1)}
        >
          Previous
        </button>
        <button
          className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          disabled={currentIndex === totalQuestions - 1}
          onClick={() => onNavigate(currentIndex + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
});

const QuestionSidebar = memo(function QuestionSidebar({
  questions,
  currentIndex,
  answers,
  onNavigate,
}) {
  return (
    <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-1">
      {questions.map((q, idx) => (
        <div
          key={idx}
          className={`w-full aspect-square flex items-center justify-center bg-white/5 rounded-md cursor-pointer text-xs text-text-muted border border-transparent hover:bg-white/10 transition-all
                                ${idx === currentIndex ? "!bg-primary !text-white !shadow-[0_0_10px_rgba(59,130,246,0.5)]" : ""}
                                ${answers[q.id]?.length ? "!bg-primary/20 !text-primary font-bold !border-primary/50" : ""}
                            `}
          onClick={() => onNavigate(idx)}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
});

const ExamView = () => {
  const { state, dispatch } = useQuiz();
  const { session } = state;
  const navigate = useNavigate();

  const currentQ = session.questions[session.currentIndex];
  const userAnswers = session.answers[currentQ.id] || [];

  const handleAnswer = React.useCallback(
    (letter, isMulti) => {
      let newAnswers = [...userAnswers];
      if (isMulti) {
        if (newAnswers.includes(letter)) {
          newAnswers = newAnswers.filter((l) => l !== letter);
        } else {
          newAnswers.push(letter);
        }
      } else {
        newAnswers = [letter];
      }
      dispatch({
        type: "ANSWER_QUESTION",
        payload: { questionId: currentQ.id, selected: newAnswers },
      });
    },
    [userAnswers, currentQ.id, dispatch],
  );

  const handleSubmit = React.useCallback(() => {
    if (confirm("Are you sure you want to submit the exam?")) {
      dispatch({ type: "FINISH_EXAM" });
      navigate("/result");
    }
  }, [dispatch, navigate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start h-full pt-4">
      {/* Sidebar */}
      <aside className="bg-bg-card p-4 rounded-xl flex flex-col h-full max-h-[calc(100vh-100px)] overflow-y-auto border border-white/5">
        <Timer />

        <button
          className={`w-full mb-4 py-2 rounded-lg font-semibold transition-all ${session.isPaused ? "bg-success text-white" : "bg-warning text-black"}`}
          onClick={() => dispatch({ type: "TOGGLE_PAUSE" })}
        >
          {session.isPaused ? "Resume Exam" : "Pause Exam"}
        </button>

        <button
          className="bg-primary text-white shadow-lg shadow-primary/30 w-full mb-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
          onClick={handleSubmit}
        >
          Submit Exam
        </button>

        <QuestionSidebar
          questions={session.questions}
          currentIndex={session.currentIndex}
          answers={session.answers}
          onNavigate={React.useCallback(
            (idx) => dispatch({ type: "NAVIGATE_QUESTION", payload: idx }),
            [dispatch],
          )}
        />
      </aside>

      {/* Question Container */}
      <section className="bg-amber-50 p-6 md:p-10 rounded-2xl border border-amber-200/30 h-full max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col relative shadow-2xl">
        {session.isPaused ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50/95 backdrop-blur-sm z-20 rounded-2xl">
            <i className="fa-solid fa-pause text-6xl text-warning mb-6"></i>
            <h2 className="text-3xl font-bold text-blue-900">Exam Paused</h2>
            <p className="text-blue-700/60 mt-2 font-bold">
              Take a breath. Click "Resume Exam" to continue.
            </p>
          </div>
        ) : (
          <>
            <QuestionContent
              currentIndex={session.currentIndex}
              totalQuestions={session.questions.length}
              currentQ={currentQ}
              userAnswers={userAnswers}
              handleAnswer={handleAnswer}
              onNavigate={React.useCallback(
                (idx) => dispatch({ type: "NAVIGATE_QUESTION", payload: idx }),
                [dispatch],
              )}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default ExamView;
