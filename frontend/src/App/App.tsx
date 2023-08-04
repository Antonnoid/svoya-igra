import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Registr from '../features/Auth/Registr';
import QuestionsList from '../features/Question/QuestionsList';
import Navbar from '../features/Navbar/Navbar';
import Scores from '../features/Scores/Scores';
// import * as api from '../features/Auth/api';
import LoginForm from '../features/Auth/LoginForm';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestionsList />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </div>
  );
}

export default App;
