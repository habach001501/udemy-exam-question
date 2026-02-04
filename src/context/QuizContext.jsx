import React, { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const initialState = {
  currentCourse: null,
  availableData: [], // { name, count, questions }
  session: {
    active: false,
    mode: null, // 'exam' or 'review'
    questions: [],
    currentIndex: 0,
    answers: {}, // { questionId: [selectedOptions] }
    startTime: null,
    timeLeft: 0, // in seconds
    isFinished: false,
  },
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_COURSE":
      return { ...state, currentCourse: action.payload };
    case "SET_AVAILABLE_DATA":
      return { ...state, availableData: action.payload };
    case "START_SESSION":
      return {
        ...state,
        session: {
          ...state.session,
          active: true,
          mode: action.payload.mode,
          questions: action.payload.questions,
          currentIndex: 0,
          answers: {},
          startTime: new Date(),
          timeLeft: action.payload.timeLeft || 0,
          isFinished: false,
          isPaused: false,
        },
      };
    case "TOGGLE_PAUSE":
      return {
        ...state,
        session: {
          ...state.session,
          isPaused: !state.session.isPaused,
        },
      };
    case "ANSWER_QUESTION":
      return {
        ...state,
        session: {
          ...state.session,
          answers: {
            ...state.session.answers,
            [action.payload.questionId]: action.payload.selected,
          },
        },
      };
    case "NAVIGATE_QUESTION":
      return {
        ...state,
        session: {
          ...state.session,
          currentIndex: action.payload,
        },
      };
    case "TICK_TIMER":
      return {
        ...state,
        session: {
          ...state.session,
          timeLeft: state.session.timeLeft - 1,
        },
      };
    case "FINISH_EXAM":
      return {
        ...state,
        session: {
          ...state.session,
          isFinished: true,
          endTime: new Date(),
          questionBadges: action.payload?.questionBadges || {},
        },
      };
    case "RESET_SESSION":
      return {
        ...state,
        session: initialState.session,
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
