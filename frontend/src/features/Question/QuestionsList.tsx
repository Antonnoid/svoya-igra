import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import QuestionCard from './QuestionCard';
import initQuestionFetch from './api';
// import * as api from './api';

function QuestionsList(): JSX.Element {
  const dispatch = useDispatch();
  const { questions } = useSelector((store: RootState) => store.questions);

  useEffect(() => {
    initQuestionFetch().then((data) =>
      dispatch({ type: 'questions/init', payload: data })
    );
  }, []);
  return (
    <div className="QuestionsList">
      {questions.map((question) => (
        <QuestionCard question={question} key={question.id} />
      ))}
    </div>
  );
}

export default QuestionsList;
