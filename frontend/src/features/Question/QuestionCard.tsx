import React from 'react';
import { Question } from './type';
import Modal from './Modal';

function QuestionCard({ question }: { question: Question }): JSX.Element {
  return (
    <div className="QuestionCard">
      <h3>Вопрос: {question.quest}</h3>
      <h3>Цена: {question.price}</h3>
      <Modal question={question} />
    </div>
  );
}

export default QuestionCard;
