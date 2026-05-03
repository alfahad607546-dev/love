import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { EntryPage } from './components/EntryPage';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { ThreeBackground } from './components/ThreeBackground';
import { HeartCursorEffect } from './components/HeartCursorEffect';

function App() {
  const [phase, setPhase] = useState('entry'); // entry, quiz, result
  const [name, setName] = useState('');
  const [finalScores, setFinalScores] = useState(null);

  const handleStart = (userName) => {
    setName(userName);
    setPhase('quiz');
  };

  const handleComplete = (scores) => {
    setFinalScores(scores);
    setPhase('result');
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-romantic-pink/30">
      {/* Visual Layer */}
      <ThreeBackground />
      <HeartCursorEffect />

      {/* Content Layer */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {phase === 'entry' && (
            <EntryPage key="entry" onStart={handleStart} />
          )}
          {phase === 'quiz' && (
            <QuizPage key="quiz" name={name} onComplete={handleComplete} />
          )}
          {phase === 'result' && (
            <ResultPage key="result" name={name} finalScores={finalScores} />
          )}
        </AnimatePresence>
      </main>

      {/* Decorative Overlay */}
      <div className="fixed inset-0 pointer-events-none border-[20px] border-white/5 z-50 rounded-[40px] m-4 hidden md:block" />
    </div>
  );
}

export default App;
