import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Question } from './type';
import { RootState } from '../../store/store';
import * as api from './api';
import './modal.css';

function Modal({ question, close }: { question: Question ,close:()=>void}): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');

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
      api.userScoreFetch(userScore);
    }
  };
  return (
    <div className="modalSto">
      <div className="modal_container">
        <div onClick={close}>fdsf</div>
        <h1>{question.quest}</h1>
        <form onSubmit={submit}>
          <div className="inpModal">
            <input
              className="input"
              type="text"
              name="Answer"
              placeholder="Ваш Ответ"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Ответить
          </button>
        </form>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default Modal;
