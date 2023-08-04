import { combineReducers } from 'redux';
import reducerAuth from '../features/Auth/reducer/reducer';
import reducerQuestions from '../features/Question/reducer/reducer';

const rootReducer = combineReducers({
  auth: reducerAuth,
  themes: reducerQuestions,
});

export default rootReducer;
