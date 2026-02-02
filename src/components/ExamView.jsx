import React, { memo, useMemo, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

// Tách Timer thành component riêng để chỉ re-render phần này mỗi giây
const Timer = memo(function Timer({ isCompact = false }) {
  const { state } = useQuiz();
  const timeLeft = state.session.timeLeft;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const formatMinutesOnly = (s) => {
    const m = Math.ceil(s / 60);
    return `${m}`;
  };

  if (isCompact) {
    return (
      <div className="bg-red-500/10 text-danger p-1.5 rounded-lg text-center text-[12px] font-bold mb-2 border border-red-500/20 font-mono w-full">
        {formatMinutesOnly(timeLeft)}
      </div>
    );
  }

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
        className="text-[18px] leading-relaxed mb-8 text-blue-900 font-semiBold [&>p]:mb-4 [&>img]:max-w-full [&>img]:rounded-xl [&>img]:border [&>img]:border-amber-200 [&>img]:my-6 [&>img]:shadow-md"
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
  isCompact = false,
}) {
  return (
    <div className={`${isCompact ? 'flex flex-col gap-0.5 overflow-y-auto flex-1 w-full mt-4' : 'grid grid-cols-5 gap-2 overflow-y-auto pr-1'}`}>
      {questions.map((q, idx) => (
        <div
          key={idx}
          className={`${isCompact ? 'w-full h-6 flex-shrink-0 text-[10px] mt-1' : 'w-full aspect-square text-xs'} flex items-center justify-center bg-white/5 rounded-md cursor-pointer text-text-muted border border-transparent hover:bg-white/10 transition-all
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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

  const handleNavigate = React.useCallback(
    (idx) => dispatch({ type: "NAVIGATE_QUESTION", payload: idx }),
    [dispatch],
  );

  return (
    <div className={`grid grid-cols-1 ${sidebarCollapsed ? 'md:grid-cols-[80px_1fr]' : 'md:grid-cols-[350px_1fr]'} gap-8 items-start h-full pt-4 transition-all duration-300`}>
      {/* Sidebar */}
      <aside className={`bg-bg-card p-4 rounded-xl flex flex-col h-full max-h-[calc(100vh-100px)] overflow-y-auto border border-white/5 transition-all duration-300 ${sidebarCollapsed ? 'items-center' : ''} [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full`}>
        {/* Toggle Button */}
        <button
          className={`w-full mb-2 rounded-lg font-semibold transition-all bg-white/5 hover:bg-white/10 border border-white/10 text-text-muted hover:text-white flex items-center justify-center gap-2 ${sidebarCollapsed ? 'py-1.5 px-2' : 'py-2 px-3'}`}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <i className={`fa-solid ${sidebarCollapsed ? 'fa-angles-right' : 'fa-angles-left'} transition-transform ${sidebarCollapsed ? 'text-xs' : ''}`}></i>
          {!sidebarCollapsed && <span>Collapse</span>}
        </button>

        <Timer isCompact={sidebarCollapsed} />

        {!sidebarCollapsed && (
          <>
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
              onNavigate={handleNavigate}
            />
          </>
        )}

        {sidebarCollapsed && (
          <>
            <div className="flex flex-col gap-1 mb-1 w-full">
              <button
                className={`w-full h-7 rounded-md text-xs font-semibold transition-all flex items-center justify-center ${session.isPaused ? "bg-success text-white" : "bg-warning text-black"}`}
                onClick={() => dispatch({ type: "TOGGLE_PAUSE" })}
                title={session.isPaused ? "Resume Exam" : "Pause Exam"}
              >
                <i className={`fa-solid ${session.isPaused ? 'fa-play' : 'fa-pause'} text-[10px]`}></i>
              </button>

              <button
                className="bg-primary text-white shadow-md shadow-primary/20 w-full h-7 rounded-md text-xs font-semibold hover:bg-blue-600 transition-all flex items-center justify-center"
                onClick={handleSubmit}
                title="Submit Exam"
              >
                <i className="fa-solid fa-paper-plane text-[10px]"></i>
              </button>
            </div>

            <QuestionSidebar
              questions={session.questions}
              currentIndex={session.currentIndex}
              answers={session.answers}
              onNavigate={handleNavigate}
              isCompact={true}
            />
          </>
        )}
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
              onNavigate={handleNavigate}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default ExamView;
