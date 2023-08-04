import { Action } from './action';
import { State } from './type';

const init = { themes: [] };
  const reducerQuestions = (state:State = init, action:Action):State => {
    switch (action.type) {
        case 'questions/init':
      return {
        ...state,
        themes: action.payload
      };
        default:
          return state;
    }
  };
  export default reducerQuestions;
