import React from 'react';
import { Question } from './type';

function QuestionCard({ question }: { question: Question }): JSX.Element {
  return (
    <div className="QuestionCard">
      <h3>Вопрос: {question.quest}</h3>
      <h3>Цена: {question.price}</h3>
    </div>
  );
}

export default QuestionCard;
