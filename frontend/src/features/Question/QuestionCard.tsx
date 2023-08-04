import React, { useState } from 'react';
import { Question } from './type';
import Modal from './Modal';

function QuestionCard({ question }: { question: Question }): JSX.Element {
  const [state, setState] = useState(false);
  const close = (): void => {
    setState((p) => !p);
  };
  const open = (): void => {
    setState((p) => !p);
  };
  return (
    <div className="QuestionCard">
      <div onClick={open} >
        <h3 className='questPrice'>{question.price}</h3>
      </div>

      {state && <Modal question={question} close={close} />}
    </div>
  );
}

export default QuestionCard;
