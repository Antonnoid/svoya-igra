import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import initQuestionFetch from './api';
import ThemeCard from './ThemeCard';
// import * as api from './api';

function QuestionsList(): JSX.Element {
  const dispatch = useDispatch();
  const { themes } = useSelector((store: RootState) => store.themes);
  const questions = [...themes.map((theme) => theme.Questions)];
  console.log(questions);

  useEffect(() => {
    initQuestionFetch().then((data) =>
      dispatch({ type: 'questions/init', payload: data })
    );
  }, []);
  return (
    <div>
      {themes.map((theme) => (
        <ThemeCard theme={theme} key={theme.id} />
      ))}
    </div>
    // <div className="QuestionsList">
    //   {questions.map((theme) => (
    //     <QuestionCard question={question} key={question.id} />
    //   ))}
    // </div>
  );
}

export default QuestionsList;
