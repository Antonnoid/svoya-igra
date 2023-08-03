import { Action } from './action';
import { State } from './type';

const init = { user: {}, error: '' };
  const reducerAuth = (state:State = init, action:Action):State => {
    switch (action.type) {
        case 'auth/reg':
            if ('message' in action.payload) {
                return {
                    ...state,
                     error: action.payload.message
                  };
            }
                return {
                    ...state,
                     user: action.payload
                  };
         case 'auth/verification':
          if ('message' in action.payload) {
            return {
              ...state,
              error: action.payload.message
            };
          }
            return {
              ...state,
              user: action.payload
            };

        default:
          return state;
    }
  };
  export default reducerAuth;
