import React from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Registr from '../features/Auth/Registr';
import QuestionsList from '../features/Question/QuestionsList';
import Navbar from '../features/Navbar/Navbar';
import Scores from '../features/Scores/Scores';
import Modal from '../features/Question/Modal';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestionsList />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  );
}

export default App;
