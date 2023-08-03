import { Question } from './type';

const initQuestionFetch = async (): Promise<Question[]> => {
  const res = await fetch('api/questions');
  const data = await res.json();
  return data;
};

export default initQuestionFetch;
