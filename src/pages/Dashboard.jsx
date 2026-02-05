import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { courses } from "../config";
import { loadCourseData } from "../utils/dataLoader";

const Dashboard = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("dashboard");
  const [examConfig, setExamConfig] = useState({ count: 75, time: 180 });

  useEffect(() => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      navigate("/");
      return;
    }
    dispatch({ type: "SET_COURSE", payload: course });

    const load = async () => {
      setLoading(true);
      const data = await loadCourseData(course.scripts);
      dispatch({ type: "SET_AVAILABLE_DATA", payload: data });
      setLoading(false);
    };
    load();
  }, [courseId, navigate, dispatch]);

  const handleStartExamSetup = () => {
    setView("exam-setup");
  };

  const handleStartReview = () => {
    setView("review-setup");
  };

  // Fisher-Yates shuffle for unbiased distribution
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const startExam = () => {
    let pool = [];
    state.availableData.forEach((set) => (pool = pool.concat(set.questions)));

    const shuffled = shuffleArray(pool);
    const questions = shuffled.slice(
      0,
      Math.min(examConfig.count, shuffled.length),
    );

    dispatch({
      type: "START_SESSION",
      payload: {
        mode: "exam",
        questions,
        timeLeft: examConfig.time * 60,
      },
    });
    navigate(`/quiz/${courseId}`);
  };

  const startReview = (setIndex) => {
    const questions = state.availableData[setIndex].questions;
    dispatch({
      type: "START_SESSION",
      payload: {
        mode: "review",
        questions,
        timeLeft: 0,
      },
    });
    navigate(`/quiz/${courseId}`);
  };

  if (loading)
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-8 text-gray-800 bg-white">
        Loading resources...
      </div>
    );

  const course = state.currentCourse || courses.find((c) => c.id === courseId);

  return (
    <div className="max-w-[1200px] mx-auto px-4 flex flex-col h-[90vh] pb-0 animate-fade-in bg-white">
      <h1
        className="text-4xl sm:text-5xl mb-8 font-bold text-center text-gray-800"
        id="course-title"
      >
        {course?.title}
      </h1>

      {view === "dashboard" && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <div
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
            onClick={handleStartReview}
          >
            <div className="text-4xl mb-4 text-primary transition-transform">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Review Questions
            </h3>
            <p className="text-gray-500">
              Browse questions by practice set. View answers and explanations
              immediately.
            </p>
          </div>
          <div
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
            onClick={handleStartExamSetup}
          >
            <div className="text-4xl mb-4 text-primary transition-transform">
              <i className="fa-solid fa-stopwatch"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Exam Simulator
            </h3>
            <p className="text-gray-500">
              Timed exam mode simulating real test conditions. Random questions
              from all sets.
            </p>
          </div>
        </div>
      )}

      {view === "exam-setup" && (
        <div className="animate-fade-in">
          <h2
            onClick={() => setView("dashboard")}
            className="text-2xl font-bold mb-6 cursor-pointer flex items-center gap-2 text-gray-800 hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> Configure Exam
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 cursor-default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Number of Questions
                </label>
                <input
                  type="number"
                  value={examConfig.count}
                  onChange={(e) =>
                    setExamConfig({
                      ...examConfig,
                      count: parseInt(e.target.value),
                    })
                  }
                  min="1"
                  max="500"
                  className="w-full p-4 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Time Limit (Minutes)
                </label>
                <input
                  type="number"
                  value={examConfig.time}
                  onChange={(e) =>
                    setExamConfig({
                      ...examConfig,
                      time: parseInt(e.target.value),
                    })
                  }
                  min="1"
                  className="w-full p-4 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>
            <button
              className="bg-primary text-white shadow-lg shadow-primary/30 mt-8 py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all text-lg"
              onClick={startExam}
            >
              Start Exam
            </button>
          </div>
        </div>
      )}

      {view === "review-setup" && (
        <div className="animate-fade-in">
          <h2
            onClick={() => setView("dashboard")}
            className="text-2xl font-bold mb-6 cursor-pointer flex items-center gap-2 text-gray-800 hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i> Select Topic
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {state.availableData.map((set, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary transition-all duration-200"
                onClick={() => startReview(idx)}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {set.name}
                </h3>
                <p className="text-gray-500">{set.count} Questions</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
