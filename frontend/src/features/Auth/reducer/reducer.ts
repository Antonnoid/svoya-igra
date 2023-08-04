import { Action } from './action';
import { State } from './type';

const init = { user: {}, error: '' };
const reducerAuth = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'auth/reg':
      if ('message' in action.payload) {
        return {
          ...state,
          error: action.payload.message,
        };
      }
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/log':
      if ('message' in action.payload) {
        return {
          ...state,
          error: action.payload.message,
        };
      }
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/logout':
      if ('message' in action.payload && action.payload.message === 'Ошибка при удалении сессии') {
        return {
          ...state,
          error: action.payload.message,
        };
      }
      return {
        ...state,
        user: {},
      };
    case 'auth/verification':
      if ('message' in action.payload) {
        return {
          ...state,
          error: action.payload.message,
        };
      }
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/scores':
      return {
        ...state,
        user: { ...state.user, score: action.payload.score },
      };

    default:
      return state;
  }
};
export default reducerAuth;
