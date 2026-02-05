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
      <div className="text-center mb-12 py-12 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200">
        <h1 className="text-5xl mb-4 text-gray-800 font-bold">
          Select Your Certification
        </h1>
        <p className="text-gray-500 text-lg">
          Choose your exam path to begin simulation.
        </p>
      </div>

      <div
        id="course-list"
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-200 cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
          >
            <div className="text-4xl mb-4 text-primary transition-transform duration-200">
              <i className={`fa-solid ${course.icon}`}></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {course.title}
            </h3>
            <p className="text-gray-500 mb-6">{course.description}</p>
            <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <i className="fa-solid fa-file-code"></i> {course.scripts.length}{" "}
              datasets
            </div>
            <button
              className="bg-primary text-white shadow-lg shadow-primary/30 mt-6 w-full py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              onClick={() => handleSelectCourse(course)}
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
