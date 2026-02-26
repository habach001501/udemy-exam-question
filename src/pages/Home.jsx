import React from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../config";
import { useQuiz } from "../context/QuizContext";

const Home = () => {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  const handleSelectCourse = (course) => {
    dispatch({ type: "SET_COURSE", payload: course });
    navigate(`/dashboard/${course.id}`);
  };

  return (
    <div
      className="max-w-[1200px] mx-auto px-4 animate-fade-in bg-white"
      id="view-home"
    >
      <div className="text-center mb-4 py-3 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200">
        <h1 className="text-5xl mb-4 text-gray-800 font-bold">
          Select Your Certification
        </h1>
      </div>

      <div
        id="course-list"
        className="flex flex-col gap-4"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 transition-all duration-200 cursor-pointer relative overflow-hidden hover:shadow-xl hover:border-primary group flex items-center gap-6"
            onClick={() => handleSelectCourse(course)}
          >
            <div className="text-4xl text-primary transition-transform duration-200 shrink-0 w-16 text-center">
              <i className={`fa-solid ${course.icon}`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold mb-1 text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{course.description}</p>
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <i className="fa-solid fa-file-code"></i> {course.scripts.length}{" "}
                datasets
              </div>
            </div>
            <button
              className="bg-primary text-white shadow-lg shadow-primary/30 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shrink-0"
              onClick={(e) => { e.stopPropagation(); handleSelectCourse(course); }}
            >
              Select Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
