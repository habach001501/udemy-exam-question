import React, { useEffect, useState } from 'react';
import ReviewView from '../components/ReviewView';
import { getHistory, deleteHistory } from '../services/api';

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

    const exportHistory = () => {
        const blob = new Blob([JSON.stringify(history)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cloudpro-history.json';
        a.click();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this history record? This action cannot be undone.')) {
            const success = await deleteHistory(id);
            if (success) {
                setHistory(prev => prev.filter(h => h.id !== id));
            } else {
                alert('Failed to delete history record.');
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
            <div className="h-[calc(100vh-80px)] w-full flex flex-col">
                <div className="px-6 py-2 flex items-center justify-between bg-bg-card border-b border-white/10 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold">History Review</h2>
                        <div className="text-sm text-text-muted">
                            {new Date(selectedAttempt.date).toLocaleString()} • {selectedAttempt.score}/{selectedAttempt.total} Correct
                        </div>
                    </div>
                    <button
                        className="text-primary hover:text-white transition-colors flex items-center gap-2"
                        onClick={() => setSelectedAttempt(null)}
                    >
                        <i className="fa-solid fa-arrow-left"></i> Back to History
                    </button>
                </div>
                <ReviewView
                    questions={selectedAttempt.questions}
                    answers={selectedAttempt.answers}
                    readOnly={true}
                    isHistoryShow={true}
                />
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8 animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-text-muted bg-clip-text text-transparent">
                    My History
                </h1>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-text-muted hover:bg-white/10 hover:text-white transition-all"
                    onClick={exportHistory}
                >
                    <i className="fa-solid fa-download"></i> Export
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-left bg-bg-card border-collapse text-sm sm:text-base">
                    <thead>
                        <tr className="bg-black/20 text-text-muted border-b border-white/5">
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Course</th>
                            <th className="p-4 font-semibold">Mode</th>
                            <th className="p-4 font-semibold">Score</th>
                            <th className="p-4 font-semibold">Stats</th>
                            <th className="p-4 font-semibold">Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.length === 0 ? (
                            <tr><td colSpan="6" className="p-8 text-center text-text-muted">No attempts yet.</td></tr>
                        ) : (
                            history.map((h, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                    <td className="p-4">{new Date(h.date).toLocaleString()}</td>
                                    <td className="p-4"><span className="px-2 py-1 rounded bg-blue-500/10 text-primary text-xs font-bold uppercase">{h.course}</span></td>
                                    <td className="p-4 uppercase text-text-muted">{h.mode}</td>
                                    <td className={`p-4 font-bold ${h.percent >= 75 ? 'text-success' : 'text-danger'}`}>{h.percent}%</td>
                                    <td className="p-4 text-xs text-text-muted">
                                        <div className="flex gap-2">
                                            <span className="text-success">{h.score || 0} C</span>
                                            <span className="text-danger">{h.incorrect || 0} W</span>
                                            <span className="text-warning">{h.unanswered || 0} S</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {h.questions ? (
                                            <div className="flex gap-2">
                                                <button
                                                    className="px-3 py-1 bg-white/5 hover:bg-primary hover:text-white rounded transition-all text-xs hover:cursor-pointer"
                                                    onClick={() => setSelectedAttempt(h)}
                                                >
                                                    Review
                                                </button>
                                                <button
                                                    className="px-3 py-1 bg-white/5 hover:bg-red-500 hover:text-white rounded transition-all text-xs text-danger hover:cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(h.id);
                                                    }}
                                                    title="Delete Result"
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-text-muted text-xs italic">No data</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
