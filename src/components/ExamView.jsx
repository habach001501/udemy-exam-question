import React, { memo, useMemo, useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Timer disguised as a subtle status indicator
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
    return `${m}m`;
  };

  if (isCompact) {
    return (
      <div className="text-gray-500 text-[10px] text-center mb-2 font-mono">
        {formatMinutesOnly(timeLeft)}
      </div>
    );
  }

  return (
    <div className="text-gray-500 text-xs text-center mb-3 flex items-center justify-center gap-2">
      <i className="fa-regular fa-clock"></i>
      <span className="font-mono">{formatTime(timeLeft)}</span>
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
  isNewQuestion,
  isAlwaysIncorrect,
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-6 pb-4 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {/* User Message - The Question */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">
            U
          </div>
          <div className="flex-1">
            {isNewQuestion && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 mb-2 text-[10px] font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                <i className="fa-solid fa-sparkles"></i> NEW
              </span>
            )}
            {isAlwaysIncorrect && !isNewQuestion && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 mb-2 text-[10px] font-semibold rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-white">
                <i className="fa-solid fa-exclamation-triangle"></i> ATTENTION
              </span>
            )}
            <div
              className="text-[18px] leading-relaxed text-[#0d0d0d] [&>p]:mb-3 [&>img]:max-w-full [&>img]:rounded-lg [&>img]:my-4 [&>img]:border [&>img]:border-gray-700"
              dangerouslySetInnerHTML={{ __html: currentQ.prompt.question }}
            ></div>
          </div>
        </div>

        {/* ChatGPT Response - The Answers */}
        <div className="flex gap-4 items-start bg-[#ececec] mx-10 px-6 py-6 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-[#10a37f] flex items-center justify-center flex-shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500999C16.1708 0.495055 14.0893 1.16498 12.3614 2.41593C10.6335 3.66688 9.34853 5.43583 8.68817 7.47113C7.29958 7.76498 5.98491 8.3308 4.82089 9.13684C3.65687 9.94288 2.66804 10.9728 1.91537 12.1607C0.884827 13.9895 0.395296 16.0718 0.504138 18.1693C0.61298 20.2668 1.31552 22.2892 2.52974 24.0072C2.08132 25.3537 1.92582 26.7804 2.07353 28.1919C2.22125 29.6034 2.66872 30.967 3.38615 32.1916C4.44939 34.0437 6.07376 35.5102 8.02463 36.3793C9.9755 37.2484 12.1521 37.4752 14.2404 37.027C15.1823 38.0885 16.34 38.9366 17.6362 39.5144C18.9324 40.0922 20.337 40.3865 21.7561 40.3768C23.8921 40.3828 25.9742 39.7125 27.7023 38.4608C29.4305 37.2092 30.7153 35.4392 31.3753 33.4029C32.7639 33.109 34.0786 32.5432 35.2426 31.7372C36.4066 30.9311 37.3955 29.9012 38.1481 28.7133C39.1787 26.8845 39.6682 24.8022 39.5594 22.7047C39.4506 20.6072 38.7481 18.5848 37.5324 16.8707ZM21.7561 37.2499C20.0518 37.2504 18.393 36.6998 17.0063 35.6729L17.2478 35.5329L25.1833 30.9549C25.4116 30.8242 25.6022 30.6361 25.7359 30.4093C25.8696 30.1826 25.9417 29.9256 25.9449 29.6629V18.4133L29.2744 20.3549C29.2948 20.3661 29.3122 20.3823 29.3247 20.402C29.3373 20.4217 29.3446 20.4443 29.3458 20.4677V29.7498C29.3439 31.7351 28.5549 33.6385 27.1503 35.0431C25.7456 36.4477 23.8413 37.2478 21.7561 37.2499ZM6.4895 30.5169C5.64023 29.0605 5.33498 27.3601 5.62474 25.7099L5.86624 25.8579L13.8017 30.4359C14.0272 30.5668 14.2841 30.6351 14.5456 30.6351C14.8072 30.6351 15.064 30.5668 15.2896 30.4359L24.878 24.9009V28.7845C24.8786 28.8069 24.8738 28.8292 24.8641 28.8495C24.8544 28.8699 24.8401 28.8878 24.8223 28.9017L16.7749 33.5487C15.0415 34.5504 12.9878 34.8226 11.0547 34.3066C9.12171 33.7906 7.4682 32.5272 6.4895 30.5169ZM4.33199 13.8781C5.17799 12.426 6.49087 11.3016 8.05574 10.6897V19.9078C8.05493 20.1681 8.12433 20.4238 8.25695 20.649C8.38957 20.8742 8.58053 21.0604 8.80974 21.1876L18.3976 26.7225L15.0676 28.6645C15.0453 28.6788 15.0198 28.6873 14.9934 28.6892C14.9669 28.6911 14.9404 28.6864 14.9163 28.6755L6.87024 24.0289C5.14227 23.0314 3.87037 21.389 3.3471 19.4703C2.82383 17.5516 3.08838 15.5057 4.07324 13.7769L4.33199 13.8781ZM31.6633 19.8116L22.0749 14.2755L25.4038 12.3347C25.4261 12.3204 25.4516 12.3119 25.478 12.31C25.5045 12.3081 25.531 12.3128 25.5551 12.3237L33.6012 16.9701C34.8452 17.6894 35.8826 18.7264 36.6021 19.9701C37.3216 21.2139 37.6971 22.6224 37.6912 24.0547C37.6853 25.4871 37.2983 26.8925 36.5686 28.1305C35.8389 29.3685 34.7929 30.3975 33.5427 31.1072V21.8891C33.5476 21.6292 33.4813 21.3727 33.3506 21.1469C33.2199 20.9212 33.0299 20.7349 32.8012 20.6078L31.6633 19.8116ZM34.9752 15.2877L34.7337 15.1397L26.8063 10.5535C26.5801 10.4231 26.3229 10.3549 26.0609 10.3549C25.7989 10.3549 25.5416 10.4231 25.3154 10.5535L15.727 16.0897V12.2061C15.7252 12.1831 15.7292 12.16 15.7385 12.1388C15.7479 12.1176 15.7624 12.099 15.7807 12.0849L23.8271 7.44894C25.0707 6.72987 26.4794 6.34352 27.9137 6.32917C29.348 6.31481 30.7638 6.67294 32.0208 7.36747C33.2778 8.062 34.3328 9.07005 35.0834 10.2935C35.8341 11.5169 36.2562 12.9138 36.3078 14.3468C36.3195 14.678 36.2995 15.0094 36.2475 15.3369C36.1952 15.4409 34.9752 15.2877 34.9752 15.2877ZM13.6496 22.5657L10.3197 20.6237C10.2986 20.6127 10.2804 20.5967 10.2668 20.577C10.2532 20.5573 10.2446 20.5345 10.2419 20.5106V11.2389C10.2455 9.79998 10.6265 8.3867 11.3487 7.14251C12.071 5.89831 13.1092 4.86773 14.3537 4.15513C15.5982 3.44254 17.0041 3.07194 18.4369 3.08136C19.8698 3.09077 21.2707 3.4799 22.5057 4.20872L22.2602 4.34872L14.3247 8.92606C14.0964 9.05675 13.9058 9.24491 13.7721 9.47163C13.6384 9.69835 13.5663 9.95541 13.5631 10.218L13.5496 22.4649L13.6496 22.5657ZM15.7226 18.4997L20.3002 15.8551L24.8778 18.4997V23.7889L20.3002 26.4335L15.7226 23.7889V18.4997Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex-1 pt-1 px-5">
            <p className="text-[16px] text-[#0d0d0d] mb-4">
              Here are the options to consider:
            </p>
            <div className="flex flex-col gap-3 px-5">
              {currentQ.prompt.answers.map((ansHtml, idx) => {
                const letter = String.fromCharCode(97 + idx);
                const isSelected = userAnswers.includes(letter);
                return (
                  <div
                    key={idx}
                    className={`flex text-[17px] border border-[#ececec] gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200
                      ${
                        isSelected
                          ? "border-[#10a37f] text-[#0d0d0d] hover:border-gray-900"
                          : "text-[#0d0d0d] hover:border hover:border-gray-900"
                      }`}
                    onClick={() =>
                      handleAnswer(letter, currentQ.correct_response.length > 1)
                    }
                  >
                    <div
                      className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-medium transition-colors
                        ${isSelected ? "bg-[#10a37f] text-white" : "bg-gray-600 text-gray-300"}`}
                    >
                      {letter.toUpperCase()}
                    </div>
                    <div
                      className={`flex-1 [&>p]:m-0 leading-relaxed ${isSelected ? "font-medium" : ""}`}
                      dangerouslySetInnerHTML={{ __html: ansHtml }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input Area (Fake) - Actually Navigation */}
      <div className="border-t border-gray-700 pt-4 mt-auto h-[90px]">
        <div className="flex items-center gap-3">
          <button
            className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            onClick={() => onNavigate(currentIndex - 1)}
            title="Previous"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="flex-1 rounded-full border-[3px] border-solid border-gray-400 px-4 py-3 text-gray-400 text-sm flex items-center justify-between h-[60px]">
            <span>
              Message {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-gray-500 text-xs opacity-60">
              #{currentQ.id}
            </span>
          </div>
          <button
            className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentIndex === totalQuestions - 1}
            onClick={() => onNavigate(currentIndex + 1)}
            title="Next"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
});

const QuestionSidebar = memo(function QuestionSidebar({
  questions,
  currentIndex,
  answers,
  onNavigate,
  isCompact = false,
}) {
  // Generate fake chat titles
  const getChatTitle = (idx) => {
    const titles = [
      "How do I optimize...",
      "Explain the concept of...",
      "What is the difference...",
      "Help me understand...",
      "Review this code...",
      "Debug this issue...",
      "Best practices for...",
      "Implementation of...",
      "Architecture question...",
      "Performance issue...",
    ];
    return titles[idx % titles.length];
  };

  if (isCompact) {
    return (
      <div className="flex flex-col gap-0.5 overflow-y-auto flex-1 w-full mt-2">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className={`w-full h-6 flex-shrink-0 text-[10px] mt-0.5 flex items-center justify-center rounded cursor-pointer transition-all
              ${idx === currentIndex ? "bg-yellow-700 text-white" : "text-gray-500 hover:bg-gray-800 hover:text-gray-400"}
              ${answers[q.id]?.length ? "text-[#10a37f] bg-blue-200" : ""}
            `}
            onClick={() => onNavigate(idx)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 overflow-y-auto pr-1 flex-1">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-2">
        Today
      </div>
      {questions.map((q, idx) => (
        <div
          key={idx}
          className={`w-full py-2.5 px-3 rounded-md cursor-pointer transition-all text-sm truncate flex items-center gap-2
            ${
              idx === currentIndex
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:bg-gray-800"
            }
            ${answers[q.id]?.length && idx !== currentIndex ? "text-[#10a37f]" : ""}
          `}
          onClick={() => onNavigate(idx)}
        >
          <i className="fa-regular fa-message text-xs flex-shrink-0"></i>
          <span className="truncate">{getChatTitle(idx)}</span>
          {answers[q.id]?.length > 0 && (
            <i className="fa-solid fa-check text-[10px] text-[#10a37f] ml-auto flex-shrink-0"></i>
          )}
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
  const [seenQuestionIds, setSeenQuestionIds] = useState(new Set());
  const [alwaysIncorrectIds, setAlwaysIncorrectIds] = useState(new Set());

  // Load seen question IDs and always-incorrect IDs from API
  useEffect(() => {
    const loadQuestionData = async () => {
      try {
        const [seenResponse, incorrectResponse] = await Promise.all([
          fetch(`${API_URL}/history/seen-questions/`),
          fetch(`${API_URL}/history/always-incorrect/`),
        ]);

        if (seenResponse.ok) {
          const data = await seenResponse.json();
          setSeenQuestionIds(new Set(data.seen_question_ids));
        }

        if (incorrectResponse.ok) {
          const data = await incorrectResponse.json();
          setAlwaysIncorrectIds(new Set(data.always_incorrect_ids));
        }
      } catch (error) {
        console.error("Failed to load question data:", error);
      }
    };
    loadQuestionData();
  }, []);

  const currentQ = session.questions[session.currentIndex];
  const userAnswers = session.answers[currentQ.id] || [];
  const isNewQuestion =
    seenQuestionIds.size > 0 && !seenQuestionIds.has(currentQ.id);
  const isAlwaysIncorrect = alwaysIncorrectIds.has(currentQ.id);

  const handleAnswer = (letter, isMulti) => {
    const currentAnswers = session.answers[currentQ.id] || [];
    let newAnswers = [...currentAnswers];
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
  };

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
    <div
      className={`grid grid-cols-1 ${sidebarCollapsed ? "md:grid-cols-[80px_1fr]" : "md:grid-cols-[350px_1fr]"} gap-8 items-start h-full pt-4 transition-all duration-300`}
    >
      {/* Sidebar */}
      <aside
        className={`bg-[#202123] p-3 rounded-none flex flex-col h-full max-h-[calc(100vh-100px)] overflow-y-auto border-r border-white/10 transition-all duration-300 ${sidebarCollapsed ? "items-center" : ""} [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        {/* New Chat Button - ChatGPT Style */}
        <button
          className={`w-full mb-3 rounded-md transition-all border border-white/20 text-gray-300 hover:bg-gray-700 flex items-center gap-2 cursor-pointer ${sidebarCollapsed ? "p-2 justify-center" : "py-3 px-3"}`}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <i className="fa-solid fa-plus text-sm"></i>
          {!sidebarCollapsed && <span className="text-sm">New chat</span>}
        </button>

        <Timer isCompact={sidebarCollapsed} />

        {!sidebarCollapsed && (
          <>
            <button
              className={`w-full mb-2 py-2.5 rounded-md text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${session.isPaused ? "bg-[#10a37f] text-white hover:bg-[#0d8a6c]" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
              onClick={() => dispatch({ type: "TOGGLE_PAUSE" })}
            >
              <i
                className={`fa-solid ${session.isPaused ? "fa-play" : "fa-pause"} text-xs`}
              ></i>
              {session.isPaused ? "Resume" : "Pause"}
            </button>

            <button
              className="bg-[#10a37f] text-white w-full mb-4 py-2.5 rounded-md text-sm hover:bg-[#0d8a6c] transition-all cursor-pointer flex items-center justify-center gap-2"
              onClick={handleSubmit}
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
              End Session
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
                className={`w-full h-7 rounded text-xs transition-all flex items-center justify-center cursor-pointer ${session.isPaused ? "bg-[#10a37f] text-white" : "bg-gray-700 text-gray-400 hover:bg-gray-600"}`}
                onClick={() => dispatch({ type: "TOGGLE_PAUSE" })}
                title={session.isPaused ? "Resume" : "Pause"}
              >
                <i
                  className={`fa-solid ${session.isPaused ? "fa-play" : "fa-pause"} text-[10px]`}
                ></i>
              </button>

              <button
                className="bg-[#10a37f] text-white w-full h-7 rounded text-xs hover:bg-[#0d8a6c] transition-all flex items-center justify-center cursor-pointer"
                onClick={handleSubmit}
                title="End Session"
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

      {/* Question Container - ChatGPT Style */}
      <section className="bg-white p-6 md:p-10 rounded-lg h-full max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col relative">
        {session.isPaused ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#343541]/95 backdrop-blur-sm z-20 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-6">
              <i className="fa-solid fa-pause text-2xl text-gray-400"></i>
            </div>
            <h2 className="text-xl font-medium text-gray-200">
              Session Paused
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Click "Resume" to continue the conversation.
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
              isNewQuestion={isNewQuestion}
              isAlwaysIncorrect={isAlwaysIncorrect}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default ExamView;
