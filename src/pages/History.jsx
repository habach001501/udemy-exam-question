import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReviewView from "../components/ReviewView";
import { getHistory, deleteHistory } from "../services/api";
import { courses } from "../config";

const ITEMS_PER_PAGE = 8;

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [selectedAttempt, setSelectedAttempt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.id || "ALL");
  const [filterDate, setFilterDate] = useState("");

  // Load history for the selected course
  useEffect(() => {
    const loadHistory = async () => {
      setLoading(true);
      setCurrentPage(1);
      const h = await getHistory(selectedCourse);
      setHistory(h);
      setLoading(false);
    };
    loadHistory();
  }, [selectedCourse]);

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this history record? This action cannot be undone.",
      )
    ) {
      const success = await deleteHistory(id, selectedCourse);
      if (success) {
        setHistory((prev) => prev.filter((h) => h.id !== id));
      } else {
        alert("Failed to delete history record.");
      }
    }
  };

  // Filter history by selected date
  const filteredHistory = useMemo(() => {
    if (!filterDate) return history;
    const startOfDay = new Date(filterDate);
    startOfDay.setHours(0, 0, 0, 0);
    return history.filter((h) => new Date(h.date) >= startOfDay);
  }, [history, filterDate]);

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
        // Always keep the latest answer and question data
        results[q.id].lastAnswer = userAnswer;
        results[q.id].question = q;
      });
    });
    return results;
  }, [filteredHistory]);

  const uniqueStats = useMemo(() => {
    const ids = Object.keys(questionStats);
    const correctUnique = ids.filter(
      (id) => questionStats[id].correct > 0,
    ).length;
    // Match WeakReview.jsx logic: weak = correct <= incorrect AND has source
    const weakCount = ids.filter(
      (id) =>
        questionStats[id].correct <= questionStats[id].incorrect &&
        questionStats[id].question.source,
    ).length;
    return {
      total: ids.length,
      correct: correctUnique,
      weak: weakCount,
    };
  }, [questionStats]);

  // Navigate to weak review page
  const handleOpenWeakReview = () => {
    navigate(`/weak-review?course=${selectedCourse}`);
  };

  // Pagination calculations (use filteredHistory)
  const totalPages = Math.ceil(filteredHistory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedHistory = filteredHistory.slice(startIndex, endIndex);

  // Reset to page 1 if current page exceeds total pages after deletion or filter change
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredHistory.length, currentPage, totalPages]);

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto p-4 animate-fade-in bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Loading History...
        </h1>
      </div>
    );
  }

  if (selectedAttempt) {
    return (
      <div className="h-[90vh] w-[95vw] mx-auto flex flex-col gap-4 bg-white">
        {/* Header Block */}
        <div className="px-6 py-4 flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl shadow-lg shrink-0 mt-2">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner">
              <i className="fa-solid fa-clock-rotate-left text-primary text-xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-3">
                History Review
                <span className="px-2 py-0.5 rounded text-[10px] bg-gray-200 border border-gray-300 text-gray-600 uppercase tracking-wider">
                  Read Only
                </span>
              </h2>
              <div className="text-sm text-gray-500 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <i className="fa-regular fa-calendar text-xs opacity-70"></i>
                  {new Date(selectedAttempt.date).toLocaleString()}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
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
            className="group flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            onClick={() => setSelectedAttempt(null)}
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
              <i className="fa-solid fa-arrow-left text-sm text-gray-500 group-hover:text-gray-700"></i>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              Back to History
            </span>
          </button>
        </div>

        {/* Main Content Block */}
        <div className="flex-1 overflow-hidden bg-gray-50 rounded-2xl border border-gray-200 shadow-inner relative">
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
    <div className="max-w-[1200px] mx-auto p-4 animate-fade-in bg-white">
      {/* Redesigned History Header */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2 shadow-lg mb-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-clock-rotate-left text-primary text-2xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">
                My History
              </h1>

              {/* Course Tab Bar */}
              <div className="flex items-center gap-2 mb-3">
                {courses.map((c) => (
                  <button
                    key={c.id}
                    className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer border ${
                      selectedCourse === c.id
                        ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedCourse(c.id)}
                  >
                    <i className={`fa-solid ${c.icon} mr-1.5`}></i>
                    {c.id}
                  </button>
                ))}

                {/* Date Filter */}
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-600 ml-2">
                  <i className="fa-solid fa-calendar-day text-orange-500"></i>
                  <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => {
                      setFilterDate(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-transparent border-none outline-none text-sm text-gray-700 cursor-pointer"
                    title="Filter from this date onward"
                  />
                  {filterDate && (
                    <button
                      className="text-gray-400 hover:text-danger transition-colors cursor-pointer"
                      onClick={() => {
                        setFilterDate("");
                        setCurrentPage(1);
                      }}
                      title="Clear date filter"
                    >
                      <i className="fa-solid fa-xmark text-xs"></i>
                    </button>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-gray-600 flex-wrap">
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200">
                  <i className="fa-solid fa-list-check text-primary"></i>
                  {filteredHistory.length} Attempts
                </span>
                {filteredHistory.length > 0 && (
                  <>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200">
                      <i className="fa-solid fa-chart-line text-success"></i>
                      {Math.round(
                        (filteredHistory.reduce(
                          (acc, curr) => acc + (curr.score || 0),
                          0,
                        ) /
                          filteredHistory.reduce(
                            (acc, curr) => acc + (curr.total || 0),
                            0,
                          )) *
                          100,
                      )}
                      % Avg Score
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200">
                      <i className="fa-solid fa-check-double text-blue-500"></i>
                      {filteredHistory.reduce(
                        (acc, curr) => acc + (curr.score || 0),
                        0,
                      )}
                      /
                      {filteredHistory.reduce(
                        (acc, curr) => acc + (curr.total || 0),
                        0,
                      )}{" "}
                      Correct
                    </span>
                    <span
                      className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-all group/unique"
                      onClick={handleOpenWeakReview}
                      title="Click to review weak questions"
                    >
                      <i className="fa-solid fa-question-circle text-purple-500"></i>
                      {uniqueStats.correct}/{uniqueStats.total} Unique
                      {uniqueStats.weak > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 font-bold border border-red-200 group-hover/unique:bg-red-200 transition-colors">
                          {uniqueStats.weak} weak
                        </span>
                      )}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredHistory.length === 0 ? (
          <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-gray-200">
            {filterDate
              ? "No attempts found from this date onward."
              : "No attempts yet."}
          </div>
        ) : (
          <>
            {paginatedHistory.map((h, idx) => (
              <div
                key={startIndex + idx}
                className="group relative overflow-hidden bg-gray-50 border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Decorative side accent */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${h.percent >= 75 ? "bg-success" : "bg-danger"} opacity-50 group-hover:opacity-100 transition-opacity`}
                ></div>

                <div className="grid grid-cols-[130px_90px_1fr_70px_150px_auto] items-center gap-3 p-2 pl-7">
                  {/* Date */}
                  <div>
                    <div className="font-bold text-gray-800 text-sm">
                      {new Date(h.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {new Date(h.date).toLocaleTimeString()}
                    </div>
                  </div>

                  {/* Course Badge */}
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide group-hover:bg-primary/20 transition-colors">
                      {h.course}
                    </span>
                  </div>

                  {/* Mode / Source Label */}
                  <div
                    className="text-sm uppercase text-gray-600 font-medium tracking-wide truncate"
                    title={h.sourceLabel || h.mode}
                  >
                    {h.sourceLabel || h.mode}
                  </div>

                  {/* Score */}
                  <div className="text-center">
                    <div
                      className={`text-2xl font-black ${h.percent >= 75 ? "text-success" : "text-danger"}`}
                    >
                      {h.percent}%
                    </div>
                    <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                      Score
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="flex gap-1 text-xs font-mono bg-gray-100 p-1.5 rounded-lg justify-center">
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

                  {/* Actions */}
                  <div className="flex items-center gap-3 justify-end">
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
                          className="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-danger/10 text-gray-400 hover:text-danger rounded-lg transition-all border border-transparent hover:border-danger/20 hover:cursor-pointer"
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
                      <span className="px-3 py-1 bg-gray-100 rounded text-gray-400 text-xs italic border border-gray-200 cursor-not-allowed opacity-50">
                        No Data
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                    currentPage === 1
                      ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-primary/30 hover:text-primary cursor-pointer"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-chevron-left mr-1"></i>
                  Prev
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        className={`w-10 h-10 rounded-lg border transition-all text-sm font-medium cursor-pointer ${
                          currentPage === page
                            ? "bg-primary border-primary text-white"
                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-primary/30 hover:text-primary"
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                    currentPage === totalPages
                      ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-primary/30 hover:text-primary cursor-pointer"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                  <i className="fa-solid fa-chevron-right ml-1"></i>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default History;
