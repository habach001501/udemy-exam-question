import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const ExamView = () => {
    const { state, dispatch } = useQuiz();
    const { session } = state;
    const navigate = useNavigate();

    const currentQ = session.questions[session.currentIndex];
    const userAnswers = session.answers[currentQ.id] || [];

    const handleAnswer = (letter, isMulti) => {
        let newAnswers = [...userAnswers];
        if (isMulti) {
            if (newAnswers.includes(letter)) {
                newAnswers = newAnswers.filter(l => l !== letter);
            } else {
                newAnswers.push(letter);
            }
        } else {
            newAnswers = [letter];
        }
        dispatch({
            type: 'ANSWER_QUESTION',
            payload: { questionId: currentQ.id, selected: newAnswers }
        });
    };

    const handleSubmit = () => {
        if (confirm('Are you sure you want to submit the exam?')) {
            dispatch({ type: 'FINISH_EXAM' });
            navigate('/result');
        }
    };

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start h-full pt-4">
            {/* Sidebar */}
            <aside className="bg-bg-card p-4 rounded-xl flex flex-col h-full max-h-[calc(100vh-100px)] overflow-y-auto border border-white/5">
                <div className="bg-red-500/10 text-danger p-4 rounded-lg text-center text-2xl font-bold mb-4 border border-red-500/20 font-mono">
                    {formatTime(session.timeLeft)}
                </div>

                <button
                    className={`w-full mb-4 py-2 rounded-lg font-semibold transition-all ${session.isPaused ? 'bg-success text-white' : 'bg-warning text-black'}`}
                    onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
                >
                    {session.isPaused ? 'Resume Exam' : 'Pause Exam'}
                </button>

                <button
                    className="bg-primary text-white shadow-lg shadow-primary/30 w-full mb-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                    onClick={handleSubmit}
                >
                    Submit Exam
                </button>

                <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-1">
                    {session.questions.map((q, idx) => (
                        <div
                            key={idx}
                            className={`w-full aspect-square flex items-center justify-center bg-white/5 rounded-md cursor-pointer text-xs text-text-muted border border-transparent hover:bg-white/10 transition-all
                                ${idx === session.currentIndex ? '!bg-primary !text-white !shadow-[0_0_10px_rgba(59,130,246,0.5)]' : ''}
                                ${session.answers[q.id]?.length ? '!bg-primary/20 !text-primary font-bold !border-primary/50' : ''}
                            `}
                            onClick={() => dispatch({ type: 'NAVIGATE_QUESTION', payload: idx })}
                        >
                            {idx + 1}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Question Container */}
            <section className="bg-bg-card p-6 md:p-10 rounded-xl border border-white/5 h-full max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col relative">
                {session.isPaused ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-card z-20">
                        <i className="fa-solid fa-pause text-6xl text-warning mb-4"></i>
                        <h2 className="text-2xl font-bold">Exam Paused</h2>
                        <p className="text-text-muted mt-2">Click "Resume Exam" to continue.</p>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between mb-6 text-text-muted text-sm uppercase tracking-wider">
                            <span>Question {session.currentIndex + 1} of {session.questions.length}</span>
                            <span>ID: #{currentQ.id}</span>
                        </div>

                        <div
                            className="text-[20px] leading-relaxed mb-8 [&>p]:mb-4 [&>img]:max-w-full [&>img]:rounded-lg [&>img]:border [&>img]:border-white/10 [&>img]:my-4"
                            dangerouslySetInnerHTML={{ __html: currentQ.prompt.question }}
                        ></div>

                        <div className="flex flex-col gap-4 mb-8">
                            {currentQ.prompt.answers.map((ansHtml, idx) => {
                                const letter = String.fromCharCode(97 + idx);
                                const isSelected = userAnswers.includes(letter);
                                return (
                                    <div
                                        key={idx}
                                        className={`flex text-[16px] gap-4 p-4 bg-white/5 border border-white/5 rounded-lg cursor-pointer transition-all hover:bg-white/10 text-base
                                            ${isSelected ? '!bg-primary/10 !border-primary' : ''}
                                        `}
                                        onClick={() => handleAnswer(letter, currentQ.correct_response.length > 1)}
                                    >
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-bold
                                            ${isSelected ? 'bg-primary border-primary text-white' : 'border-text-muted/50 text-text-muted'}
                                        `}>
                                            {letter.toUpperCase()}
                                        </div>
                                        <div className="flex-1 [&>p]:m-0" dangerouslySetInnerHTML={{ __html: ansHtml }}></div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex justify-between mt-auto pt-8 border-t border-white/10">
                            <button
                                className="px-6 py-3 bg-white/10 text-text-main rounded-lg font-semibold hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={session.currentIndex === 0}
                                onClick={() => dispatch({ type: 'NAVIGATE_QUESTION', payload: session.currentIndex - 1 })}
                            >
                                Previous
                            </button>
                            <button
                                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                                disabled={session.currentIndex === session.questions.length - 1}
                                onClick={() => dispatch({ type: 'NAVIGATE_QUESTION', payload: session.currentIndex + 1 })}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default ExamView;
