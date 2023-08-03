import { Action } from './action';
import { State } from './type';

const init = { questions: [] };
  const reducerQuestions = (state:State = init, action:Action):State => {
    switch (action.type) {
        case 'questions/init':
      return {
        ...state,
        questions: action.payload
      };
        default:
          return state;
    }
  };
  export default reducerQuestions;
