import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from './type';
import { RootState } from '../../store/store';
import * as api from './api'

function Modal({ question }: { question: Question }) {
  const { user } = useSelector((store: RootState) => store.auth);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let userScore = 0;
    if ('id' in user) {
      if (question.answer === answer) {
        userScore = user.score + question.price;
        setResult('Правильно!');
      } else {
        setResult(`Не правильно! Правильный ответ ${question.answer}`);
        userScore = user.score - question.price;
      }
      api.userScoreFetch( userScore)
    }
  };
  return (
    <div>
      <h1>{question.quest}</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="Answer"
          placeholder="Ваш Ответ"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Ответить</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default Modal;
