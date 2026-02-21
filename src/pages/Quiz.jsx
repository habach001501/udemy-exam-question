import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import ExamView from "../components/ExamView";
import ReviewView from "../components/ReviewView";

const Quiz = () => {
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { session } = state;

  // Read set index from URL param
  const setParam = searchParams.get("set");
  const setIndex = setParam !== null ? parseInt(setParam, 10) : undefined;

  useEffect(() => {
    if (!session.active) {
      navigate("/");
    }
  }, [session.active, navigate]);



  if (!session.active) return null;

  return (
    <div className="w-full max-w-[85vw] mx-auto px-4 h-[calc(100vh-80px)] overflow-hidden">
      {session.mode === "exam" ? (
        <ExamView />
      ) : (
        <ReviewView setIndex={setIndex} />
      )}
    </div>
  );
};

export default Quiz;
