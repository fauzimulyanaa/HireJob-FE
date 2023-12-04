import { combineReducers } from 'redux';
import AuthRegisterCompany from './AuthRegisterCompany';
import AuthLoginCompany from './AuthLoginCompany';
import AuthLoginWorker from './AuthLoginWorker';
import AuthRegisterWorker from './AuthRegisterWorker';
import detailProfileCompany from './DetailProfileCompany';
import editProfileCompany from './EditProfileCompany';

const rootReducers = combineReducers({
  AuthRegisterCompany,
  AuthLoginCompany,
  AuthRegisterWorker,
  AuthLoginWorker,
  detailProfileCompany,
  editProfileCompany,
});

export default rootReducers;
