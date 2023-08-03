import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registr from '../features/Auth/Registr';
import QuestionsList from '../features/Question/QuestionsList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registr />} />
        <Route path="/questions" element={<QuestionsList />} />
      </Routes>
    </div>
  );
}

export default App;
