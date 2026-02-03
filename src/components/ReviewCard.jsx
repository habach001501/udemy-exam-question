import React from 'react';

const ReviewCard = ({ question, index, interactiveMode, selected = [], readOnly = false, revealed = false, onSelectionChange, onReveal }) => {
    // Removed local state 'revealed' to rely on props from parent

    const handleOptionClick = (letter, isMulti) => {
        if (!interactiveMode || readOnly) return;
        if (revealed) return;

        let newSelected = [...selected];
        if (isMulti) {
            if (newSelected.includes(letter)) {
                newSelected = newSelected.filter(l => l !== letter);
            } else {
                newSelected.push(letter);
            }
        } else {
            newSelected = [letter];
        }

        if (onSelectionChange) {
            onSelectionChange(question.id, newSelected);
        }
    };

    const handleReveal = () => {
        if (onReveal) {
            onReveal();
        }
    };

    return (
        <div
            id={`review-card-${index}`}
            className={`min-w-[50vw] w-[50vw] h-full bg-bg-card border border-white/10 rounded-xl p-8 overflow-y-auto flex flex-col shrink-0 ${revealed ? 'revealed' : ''}`}
        >
            <div className="flex justify-between mb-6 text-text-muted text-sm uppercase tracking-wider">
                <span>Question {index + 1}</span>
                <span>ID: #{question.id}</span>
            </div>

            <div
                className="text-[16px] leading-relaxed mb-8 [&>p]:mb-4 [&>img]:max-w-full [&>img]:rounded-lg [&>img]:border [&>img]:border-white/10"
                dangerouslySetInnerHTML={{ __html: question.prompt.question }}
            ></div>

            <div className="flex flex-col gap-4">
                {question.prompt.answers.map((ansHtml, idx) => {
                    const letter = String.fromCharCode(97 + idx);
                    const isSelected = selected.includes(letter);
                    const isCorrect = question.correct_response.includes(letter);

                    // Logic for styling
                    // Study Mode (!interactiveMode): Show correct (green), ignore selected (or maybe show nothing if study mode is purely read? usually study mode highlights correct answer).
                    // Let's implement Study Mode = Highlight Correct Answer immediately.

                    // Interactive Mode:
                    // If !revealed: Highlight Selected (Blue).
                    // If revealed: Highlight Correct (Green). If Selected was Wrong (Red).

                    let bgClass = "bg-white/5 border-white/5";
                    let markerClass = "border-text-muted/50 text-text-muted";

                    if (!interactiveMode) {
                        // Study Mode
                        if (isCorrect) {
                            bgClass = "bg-green-500/15 border-green-500";
                            markerClass = "bg-success border-success text-white";
                        }
                    } else {
                        // Interactive Mode configuration
                        if (revealed) {
                            if (isCorrect) {
                                bgClass = "bg-green-500/15 border-green-500";
                                markerClass = "bg-success border-success text-white";
                            } else if (isSelected) {
                                bgClass = "bg-red-500/15 border-red-500";
                                markerClass = "bg-danger border-danger text-white";
                            }
                        } else {
                            if (isSelected) {
                                bgClass = "bg-primary/10 border-primary";
                                markerClass = "bg-primary border-primary text-white";
                            }
                        }
                    }

                    // Determine labels for revealed state
                    const showYourAnswerLabel = revealed && isSelected;
                    const showCorrectLabel = revealed && isCorrect;

                    return (
                        <div
                            key={idx}
                            className={`flex text-[14px] gap-4 p-4 rounded-lg border transition-all text-base cursor-pointer hover:bg-white/10 ${bgClass} relative`}
                            onClick={() => handleOptionClick(letter, question.correct_response.length > 1)}
                        >
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-bold ${markerClass}`}>
                                {letter.toUpperCase()}
                            </div>
                            <div className="flex-1 [&>p]:m-0" dangerouslySetInnerHTML={{ __html: ansHtml }}></div>
                            {/* Labels */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                {showYourAnswerLabel && (
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                                        Your Answer
                                    </span>
                                )}
                                {showCorrectLabel && !isSelected && (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-success/20 text-success">
                                        Correct
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Explanation Area */}
            {(!interactiveMode || revealed) && (
                <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg text-green-100 animate-fade-in">
                    <h4 className="text-success mb-2 flex items-center gap-2 font-bold">
                        <i className="fa-solid fa-circle-check"></i> Explanation
                    </h4>
                    <div className="[&>p]:mb-2 [&>img]:max-w-full [&>img]:rounded-lg break-words whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: question.prompt.explanation }}></div>
                </div>
            )}

            {interactiveMode && !revealed && (
                <button
                    className="mt-8 py-3 px-6 bg-success text-white rounded-lg font-semibold hover:bg-green-600 shadow-lg shadow-green-500/30 transition-all w-max self-start"
                    onClick={handleReveal}
                >
                    Reveal Answer
                </button>
            )}
        </div>
    );
};

export default ReviewCard;
