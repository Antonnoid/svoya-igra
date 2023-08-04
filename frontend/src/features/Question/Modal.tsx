import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const question = {
  themeId: 1,
  quest: 'Самая частоупоминаемая болезнь в сериале "Доктор Хаус"',
  answer: 'Волчанка',
  price: 200,
};

function Modal() {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (question.answer === answer) {
      setResult('Правильно!');
    } else {
      setResult(`Не правильно! Правильный ответ ${result}`);
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
