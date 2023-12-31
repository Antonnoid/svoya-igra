import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ThemeCard from './ThemeCard';
import * as api from './api';

function QuestionsList(): JSX.Element {
  const dispatch = useDispatch();
  const { themes } = useSelector((store: RootState) => store.themes);

  useEffect(() => {
    api.initQuestionFetch()
    .then((data) => dispatch({ type: 'questions/init', payload: data })
    );
  }, []);
  return (
    <div>
      {themes.map((theme) => (
        <ThemeCard theme={theme} key={theme.id} />
      ))}
    </div>
  );
}

export default QuestionsList;
