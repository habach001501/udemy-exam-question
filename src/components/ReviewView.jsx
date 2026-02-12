import React, { useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import ReviewCard from "./ReviewCard";

const ReviewView = ({
  questions,
  answers,
  readOnly = false,
  isHistoryShow = false,
  setIndex,
}) => {
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionQuestions = questions || state.session.questions;
  const initialAnswers = answers || state.session.answers || {};

  // Track current answers for highlighting, initializing from props/session
  const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);
  const [interactiveMode, setInteractiveMode] = useState(true);
  const [revealedQuestions, setRevealedQuestions] = useState({});
  const [filter, setFilter] = useState("all"); // all, correct, incorrect, unanswered

  // Determine if set switcher should be shown
  const availableSets = state.availableData || [];
  const showSetSwitcher = setIndex !== undefined && availableSets.length > 0;

  const handleSwitchSet = useCallback(
    (newIndex) => {
      if (newIndex === setIndex || !availableSets[newIndex]) return;

      const newQuestions = availableSets[newIndex].questions;
      dispatch({
        type: "START_SESSION",
        payload: {
          mode: "review",
          questions: newQuestions,
          timeLeft: 0,
        },
      });

      // Update URL param
      const courseId = window.location.pathname
        .split("/quiz/")[1]
        ?.split("?")[0];
      if (courseId) {
        navigate(`/quiz/${courseId}?set=${newIndex}`, { replace: true });
      }

      // Reset local state
      setCurrentAnswers({});
      setRevealedQuestions({});
      setFilter("all");
    },
    [setIndex, availableSets, dispatch, navigate],
  );

  const getQuestionStatus = (q) => {
    const userAns = (currentAnswers[q.id] || []).sort().join("");
    const correctAns = (q.correct_response || []).sort().join("");

    if (!userAns) return "unanswered";
    return userAns === correctAns ? "correct" : "incorrect";
  };

  const handleReveal = (qId) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [qId]: true,
    }));
  };

  const filteredQuestions = sessionQuestions
    .map((q, idx) => ({ ...q, originalIndex: idx }))
    .filter((q) => {
      if (filter === "all") return true;
      const status = getQuestionStatus(q);
      return status === filter;
    });

  const counts = {
    all: sessionQuestions.length,
    correct: sessionQuestions.filter((q) => {
      const status = getQuestionStatus(q);
      const isVisible =
        !interactiveMode || revealedQuestions[q.id] || isHistoryShow;
      return status === "correct" && isVisible;
    }).length,
    incorrect: sessionQuestions.filter((q) => {
      const status = getQuestionStatus(q);
      const isVisible =
        !interactiveMode || revealedQuestions[q.id] || isHistoryShow;
      return status === "incorrect" && isVisible;
    }).length,
    unanswered: sessionQuestions.filter(
      (q) => getQuestionStatus(q) === "unanswered",
    ).length,
  };

  const handleAnswerChange = (qId, selected) => {
    setCurrentAnswers((prev) => ({
      ...prev,
      [qId]: selected,
    }));
  };

  const scrollToCard = (index) => {
    const card = document.getElementById(`review-card-${index}`);
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div
      className={`flex flex-col h-full gap-0 overflow-hidden ${interactiveMode ? "interactive-mode" : ""}`}
    >
      {/* Top Bar Navigation */}
      <aside className="relative w-full h-auto flex flex-col shrink-0 z-10 py-2 gap-4 px-6 bg-gradient-to-b from-bg-dark to-transparent">
        <div className="flex items-center justify-between gap-4">
          {/* Left Block: Mode Switcher (only if not readonly) */}
          {!readOnly && (
            <div className="flex bg-bg-card border border-white/10 rounded-xl p-1.5 shadow-xl shrink-0 backdrop-blur-md">
              <button
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${!interactiveMode ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-muted hover:text-white hover:bg-white/5"}`}
                onClick={() => setInteractiveMode(false)}
              >
                <i className="fa-solid fa-book-open text-xs"></i>Study
              </button>
              <button
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${interactiveMode ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-muted hover:text-white hover:bg-white/5"}`}
                onClick={() => setInteractiveMode(true)}
              >
                <i className="fa-solid fa-pen-to-square text-xs"></i>Practice
              </button>
            </div>
          )}

          {/* Set Switcher Dropdown — only shown in review-by-set mode */}
          {showSetSwitcher && (
            <div className="flex bg-bg-card border border-white/10 rounded-xl p-1.5 shadow-xl shrink-0 backdrop-blur-md items-center gap-2 px-3">
              <i className="fa-solid fa-layer-group text-xs text-text-muted"></i>
              <select
                value={setIndex}
                onChange={(e) => handleSwitchSet(parseInt(e.target.value, 10))}
                className="bg-transparent text-white text-sm font-bold border-none outline-none cursor-pointer appearance-none pr-6"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0 center",
                }}
              >
                {availableSets.map((set, idx) => (
                  <option
                    key={idx}
                    value={idx}
                    className="bg-[#1e1e2e] text-white"
                  >
                    {set.name} ({set.count}q)
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Center Block: Question Navigation */}
          <div className="flex-1 flex overflow-hidden bg-bg-card border border-white/10 rounded-xl shadow-xl h-[56px] items-center relative group backdrop-blur-md">
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg-card to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-x-auto items-center gap-2 px-6 w-full h-full thin-scrollbar scroll-smooth">
              {filteredQuestions.map((q) => {
                const status = getQuestionStatus(q);
                const isRevealed =
                  !interactiveMode || revealedQuestions[q.id] || isHistoryShow;

                let statusColor =
                  "bg-white/5 text-text-muted border-transparent hover:bg-white/10";
                let icon = null;

                if (currentAnswers[q.id]?.length > 0) {
                  if (!isRevealed && !isHistoryShow) {
                    statusColor =
                      "!bg-primary/20 !text-primary font-bold !border-primary/50 shadow-[0_0_10px_rgba(59,130,246,0.15)]";
                    icon = (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mb-0.5 animate-pulse"></div>
                    );
                  } else {
                    if (status === "correct") {
                      statusColor =
                        "!bg-success/20 !text-success font-bold !border-success/50 shadow-[0_0_10px_rgba(16,185,129,0.15)]";
                      icon = <i className="fa-solid fa-check text-[9px]"></i>;
                    } else if (status === "incorrect") {
                      statusColor =
                        "!bg-danger/20 !text-danger font-bold !border-danger/50 shadow-[0_0_10px_rgba(239,68,68,0.15)]";
                      icon = <i className="fa-solid fa-xmark text-[9px]"></i>;
                    }
                  }
                }

                return (
                  <div
                    key={q.originalIndex}
                    id={`dot-${q.originalIndex}`}
                    className={`min-w-[36px] h-9 shrink-0 flex flex-col items-center justify-center rounded-lg cursor-pointer text-xs transition-all duration-300 border transform hover:scale-110 active:scale-95 group/dot
                                        ${statusColor}
                                    `}
                    onClick={() => scrollToCard(q.originalIndex)}
                  >
                    <span className="leading-none mt-0.5 font-mono">
                      {q.originalIndex + 1}
                    </span>
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Filters */}
          <div className="bg-bg-card border border-white/10 rounded-xl p-1.5 flex gap-1 shadow-xl shrink-0 backdrop-blur-md">
            {["all", "correct", "incorrect", "unanswered"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-[11px] font-bold uppercase hover:cursor-pointer border transition-all relative group overflow-hidden
                                    ${
                                      filter === f
                                        ? "bg-white/10 text-white border-white/20 shadow-inner"
                                        : "text-text-muted border-transparent hover:bg-white/5 hover:text-white"
                                    }
                                    ${f === "correct" && filter === f ? "!bg-success/10 !text-success !border-success/20" : ""}
                                    ${f === "incorrect" && filter === f ? "!bg-danger/10 !text-danger !border-danger/20" : ""}
                                    ${f === "unanswered" && filter === f ? "!bg-warning/10 !text-warning !border-warning/20" : ""}
                                `}
              >
                <span className="relative z-10">{f}</span>
                {filter === f && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
                )}

                {counts[f] > 0 && (
                  <span
                    className={`absolute top-0.75 right-0.75 text-[10px] flex items-center justify-center min-w-[18px] h-[18px]  rounded-full font-extrabold shadow-sm border border-bg-card z-20 transition-transform duration-300 group-hover:scale-110
                                        ${
                                          f === "correct"
                                            ? "bg-success text-bg-dark"
                                            : f === "incorrect"
                                              ? "bg-danger text-white"
                                              : f === "unanswered"
                                                ? "bg-warning text-bg-dark"
                                                : "bg-primary text-white"
                                        }
                                    `}
                  >
                    {counts[f]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Scrollable Area */}
      <div className="flex-1 w-full overflow-x-auto overflow-y-hidden py-3 bg-bg-dark thin-scrollbar">
        <div className="flex flex-row h-full w-max gap-6">
          {filteredQuestions.length === 0 ? (
            <div className="flex items-center justify-center w-[90vw] h-full text-text-muted">
              No questions found for this filter.
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const isRevealed =
                !interactiveMode || revealedQuestions[q.id] || isHistoryShow;
              return (
                <ReviewCard
                  key={q.originalIndex}
                  question={q}
                  index={q.originalIndex}
                  interactiveMode={interactiveMode}
                  selected={currentAnswers[q.id] || []}
                  readOnly={readOnly}
                  revealed={isRevealed}
                  onSelectionChange={handleAnswerChange}
                  onReveal={() => handleReveal(q.id)}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewView;
