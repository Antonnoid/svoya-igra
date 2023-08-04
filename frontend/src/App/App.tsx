import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registr from '../features/Auth/Registr';
import QuestionsList from '../features/Question/QuestionsList';
import Navbar from '../features/Navbar/Navbar';
import Scores from '../features/Scores/Scores';
import * as api from '../features/Auth/api';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .verificationFetch()
      .then((data) => dispatch({ type: 'auth/verification', payload: data }));
  }, []);
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
