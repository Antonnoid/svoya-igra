import React from 'react';
import { Theme } from './type';
import QuestionCard from './QuestionCard';

function ThemeCard({ theme }: { theme: Theme }): JSX.Element {
  return (
    <div className="ThemeCard">
      <h3 className='themeName'>{theme.name}</h3>
      {theme.Questions.map((question) => <QuestionCard question={question} key={question.id} />)}
    </div>
  );
}

export default ThemeCard;
