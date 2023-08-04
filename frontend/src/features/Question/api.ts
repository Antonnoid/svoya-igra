import { Question } from './type';

export const initQuestionFetch = async (): Promise<Question[]> => {
  const res = await fetch('api/questions');
  const data = await res.json();
  return data;
};

export const userScoreFetch = async (
  score: number
): Promise<{ score: number }> => {
  const res = await fetch('/api/scores', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ score }),
  });
  const data = await res.json();
  return data;
};
