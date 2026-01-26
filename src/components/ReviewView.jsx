import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import ReviewCard from './ReviewCard';

const ReviewView = ({ questions, answers, readOnly = false }) => {
    const { state } = useQuiz();
    const sessionQuestions = questions || state.session.questions;
    const initialAnswers = answers || state.session.answers || {};

    // Track current answers for highlighting, initializing from props/session
    const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);
    const [interactiveMode, setInteractiveMode] = useState(true);
    const [filter, setFilter] = useState('all'); // all, correct, incorrect, unanswered

    const getQuestionStatus = (q) => {
        const userAns = (currentAnswers[q.id] || []).sort().join('');
        const correctAns = (q.correct_response || []).sort().join('');

        if (!userAns) return 'unanswered';
        return userAns === correctAns ? 'correct' : 'incorrect';
    };

    const filteredQuestions = sessionQuestions.map((q, idx) => ({ ...q, originalIndex: idx })).filter(q => {
        if (filter === 'all') return true;
        const status = getQuestionStatus(q);
        return status === filter;
    });

    const handleAnswerChange = (qId, selected) => {
        setCurrentAnswers(prev => ({
            ...prev,
            [qId]: selected
        }));
    };

    const scrollToCard = (index) => {
        const card = document.getElementById(`review-card-${index}`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    };

    return (
        <div className={`flex flex-col h-full gap-0 overflow-hidden ${interactiveMode ? 'interactive-mode' : ''}`}>
            {/* Top Bar Navigation */}
            <aside className="relative w-full h-auto flex flex-col bg-bg-card border-b border-white/10 shrink-0 z-10 py-3 gap-3">
                <div className="flex items-center justify-between px-6">
                    <div className="flex bg-bg-dark rounded-lg p-1 border border-white/10">
                        <button
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${!interactiveMode ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:text-text-main'}`}
                            onClick={() => setInteractiveMode(false)}
                        >
                            Study
                        </button>
                        <button
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${interactiveMode ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:text-text-main'}`}
                            onClick={() => setInteractiveMode(true)}
                        >
                            Practice
                        </button>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2">
                        {['all', 'correct', 'incorrect', 'unanswered'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-3 py-1 rounded-md text-xs font-semibold uppercase border transition-all
                                    ${filter === f
                                        ? 'bg-white/10 text-white border-white/20'
                                        : 'text-text-muted border-transparent hover:bg-white/5'
                                    }
                                    ${f === 'correct' && filter === f ? '!bg-success/20 !text-success !border-success/50' : ''}
                                    ${f === 'incorrect' && filter === f ? '!bg-danger/20 !text-danger !border-danger/50' : ''}
                                    ${f === 'unanswered' && filter === f ? '!bg-warning/20 !text-warning !border-warning/50' : ''}
                                `}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-x-auto mx-4 items-center gap-2 px-2 thin-scrollbar scroll-smooth pb-2">
                    {filteredQuestions.map((q) => {
                        const status = getQuestionStatus(q);
                        let statusColor = "bg-white/5 text-text-muted border-transparent";

                        if (currentAnswers[q.id]?.length > 0) {
                            if (status === 'correct') statusColor = "!bg-success/20 !text-success font-bold !border-success/50";
                            else if (status === 'incorrect') statusColor = "!bg-danger/20 !text-danger font-bold !border-danger/50";
                        } else if (status === 'unanswered') { // Only show yellow if it's explicitly unanswered and we care? 
                            // Actually, user wants to see what is right/wrong.
                            // If unanwsered, it's neutral.
                        }

                        return (
                            <div
                                key={q.originalIndex}
                                id={`dot-${q.originalIndex}`}
                                className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-md cursor-pointer text-xs hover:bg-white/10 transition-all border
                                    ${statusColor}
                                `}
                                onClick={() => scrollToCard(q.originalIndex)}
                            >
                                {q.originalIndex + 1}
                            </div>
                        );
                    })}
                </div>
            </aside>

            {/* Scrollable Area */}
            <div className="flex-1 w-full overflow-x-auto overflow-y-hidden p-6 bg-bg-dark thin-scrollbar">
                <div className="flex flex-row h-full w-max gap-6">
                    {filteredQuestions.length === 0 ? (
                        <div className="flex items-center justify-center w-[90vw] h-full text-text-muted">
                            No questions found for this filter.
                        </div>
                    ) : (
                        filteredQuestions.map((q) => (
                            <ReviewCard
                                key={q.originalIndex}
                                question={q}
                                index={q.originalIndex}
                                interactiveMode={interactiveMode}
                                selected={currentAnswers[q.id] || []}
                                readOnly={readOnly}
                                onSelectionChange={handleAnswerChange}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewView;
