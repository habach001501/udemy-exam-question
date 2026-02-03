import React, { useEffect, useState } from "react";
import ReviewView from "../components/ReviewView";
import { getHistory, deleteHistory } from "../services/api";

const History = () => {
  const [history, setHistory] = useState([]);
  const [selectedAttempt, setSelectedAttempt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      setLoading(true);
      const h = await getHistory();
      setHistory(h);
      setLoading(false);
    };
    loadHistory();
  }, []);

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this history record? This action cannot be undone.",
      )
    ) {
      const success = await deleteHistory(id);
      if (success) {
        setHistory((prev) => prev.filter((h) => h.id !== id));
      } else {
        alert("Failed to delete history record.");
      }
    }
  };

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-text-muted bg-clip-text text-transparent mb-8">
          Loading History...
        </h1>
      </div>
    );
  }

  if (selectedAttempt) {
    return (
      <div className="h-[calc(100vh-80px)] w-[95vw] mx-auto flex flex-col gap-4">
        {/* Header Block */}
        <div className="px-6 py-4 flex items-center justify-between bg-bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl shrink-0 mt-2">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner">
              <i className="fa-solid fa-clock-rotate-left text-primary text-xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
                History Review
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 border border-white/10 text-text-muted uppercase tracking-wider">
                  Read Only
                </span>
              </h2>
              <div className="text-sm text-text-muted mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <i className="fa-regular fa-calendar text-xs opacity-70"></i>
                  {new Date(selectedAttempt.date).toLocaleString()}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span
                  className={`flex items-center gap-1.5 font-semibold ${selectedAttempt.percent >= 75 ? "text-success" : "text-danger"}`}
                >
                  <i
                    className={`fa-solid ${selectedAttempt.percent >= 75 ? "fa-check" : "fa-xmark"}`}
                  ></i>
                  {selectedAttempt.score}/{selectedAttempt.total} Correct
                </span>
              </div>
            </div>
          </div>

          <button
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-white/20"
            onClick={() => setSelectedAttempt(null)}
          >
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
              <i className="fa-solid fa-arrow-left text-sm text-text-muted group-hover:text-white"></i>
            </div>
            <span className="text-sm font-medium text-text-muted group-hover:text-white">
              Back to History
            </span>
          </button>
        </div>

        {/* Main Content Block */}
        <div className="flex-1 overflow-hidden bg-bg-card/50 rounded-2xl border border-white/5 shadow-inner relative">
          <ReviewView
            questions={selectedAttempt.questions}
            answers={selectedAttempt.answers}
            readOnly={true}
            isHistoryShow={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 animate-fade-in">
      {/* Redesigned History Header */}
      <div className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl mb-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-clock-rotate-left text-primary text-2xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-2">
                My History
              </h1>
              <div className="flex items-center gap-4 text-sm font-medium text-text-muted">
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                  <i className="fa-solid fa-list-check text-primary"></i>
                  {history.length} Attempts
                </span>
                {history.length > 0 && (
                  <>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                      <i className="fa-solid fa-chart-line text-success"></i>
                      {Math.round(
                        (history.reduce(
                          (acc, curr) => acc + (curr.score || 0),
                          0,
                        ) /
                          history.reduce(
                            (acc, curr) => acc + (curr.total || 0),
                            0,
                          )) *
                          100,
                      )}
                      % Avg Score
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                      <i className="fa-solid fa-check-double text-blue-400"></i>
                      {history.reduce(
                        (acc, curr) => acc + (curr.score || 0),
                        0,
                      )}
                      /
                      {history.reduce(
                        (acc, curr) => acc + (curr.total || 0),
                        0,
                      )}{" "}
                      Correct
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                      <i className="fa-solid fa-question-circle text-purple-400"></i>
                      {(() => {
                        // Collect all question attempts: { questionId -> [isCorrect1, isCorrect2, ...] }
                        const questionResults = {};
                        history.forEach((h) => {
                          (h.questions || []).forEach((q) => {
                            const userAnswer = h.answers?.[q.id] || [];
                            const correctAnswer = q.correct_response || [];
                            // Check if answer is correct (arrays must match)
                            const isCorrect =
                              JSON.stringify([...userAnswer].sort()) ===
                              JSON.stringify([...correctAnswer].sort());
                            if (!questionResults[q.id]) {
                              questionResults[q.id] = [];
                            }
                            questionResults[q.id].push(isCorrect);
                          });
                        });
                        // Count unique questions that have at least one correct answer
                        const uniqueIds = Object.keys(questionResults);
                        const correctUnique = uniqueIds.filter((id) =>
                          questionResults[id].some((r) => r === true),
                        ).length;
                        return `${correctUnique}/${uniqueIds.length}`;
                      })()}{" "}
                      Unique
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {history.length === 0 ? (
          <div className="p-8 text-center text-text-muted bg-white/5 rounded-xl border border-white/5">
            No attempts yet.
          </div>
        ) : (
          history.map((h, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-bg-card border border-white/5 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Decorative side accent */}
              <div
                className={`absolute top-0 left-0 w-1 h-full ${h.percent >= 75 ? "bg-success" : "bg-danger"} opacity-50 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div className="flex flex-wrap items-center gap-4 p-5 pl-7">
                {/* Date and ID Info */}
                <div className="min-w-[140px]">
                  <div className="font-bold text-white">
                    {new Date(h.date).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">
                    {new Date(h.date).toLocaleTimeString()}
                  </div>
                </div>

                {/* Course Badge */}
                <div className="min-w-[120px]">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wide group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    {h.course}
                  </span>
                </div>

                {/* Mode */}
                <div className="w-[100px] text-sm uppercase text-text-muted font-medium tracking-wide">
                  {h.mode}
                </div>

                {/* Score Main Display */}
                <div className="flex-1 flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div
                      className={`text-2xl font-black ${h.percent >= 75 ? "text-success" : "text-danger"}`}
                    >
                      {h.percent}%
                    </div>
                    <div className="text-[10px] uppercase text-text-muted font-bold tracking-wider">
                      Score
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="flex gap-1 text-xs font-mono bg-black/20 p-1.5 rounded-lg">
                    <div
                      className="px-2 py-0.5 rounded bg-success/10 text-success border border-success/20"
                      title="Correct"
                    >
                      {h.score || 0} C
                    </div>
                    <div
                      className="px-2 py-0.5 rounded bg-danger/10 text-danger border border-danger/20"
                      title="Incorrect"
                    >
                      {h.incorrect || 0} W
                    </div>
                    <div
                      className="px-2 py-0.5 rounded bg-warning/10 text-warning border border-warning/20"
                      title="Skipped"
                    >
                      {h.unanswered || 0} S
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {h.questions ? (
                    <>
                      <button
                        className="px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-all text-sm font-semibold border border-primary/20 hover:border-primary hover:shadow-md hover:cursor-pointer flex items-center gap-2 group/btn"
                        onClick={() => setSelectedAttempt(h)}
                      >
                        <span>Review</span>
                        <i className="fa-solid fa-arrow-right transform group-hover/btn:translate-x-1 transition-transform"></i>
                      </button>
                      <button
                        className="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-danger/10 text-text-muted hover:text-danger rounded-lg transition-all border border-transparent hover:border-danger/20 hover:cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(h.id);
                        }}
                        title="Delete Result"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 bg-white/5 rounded text-text-muted text-xs italic border border-white/5 cursor-not-allowed opacity-50">
                      No Data
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
