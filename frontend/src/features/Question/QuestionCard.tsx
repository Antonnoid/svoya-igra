import React, { useState } from 'react';
import { Question } from './type';
import Modal from './Modal';

function QuestionCard({ question }: { question: Question }): JSX.Element {
  const [state, setState] = useState(true);
  return (
    <div className="QuestionCard" onClick={() => setState((prev) => !prev)}>
      <h3>Вопрос: {question.quest}</h3>
      <h3>Цена: {question.price}</h3>
      {!state && <Modal question={question} />}
    </div>
  );
}

export default QuestionCard;
