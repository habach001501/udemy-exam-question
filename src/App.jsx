import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import History from './pages/History';

function App() {
  return (
    <>
      <Header />
      <main className="bg-white max-h-[93vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:courseId" element={<Dashboard />} />
          <Route path="/quiz/:courseId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
