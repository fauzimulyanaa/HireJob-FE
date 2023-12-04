import { combineReducers } from 'redux';
import AuthRegisterCompany from './AuthRegisterCompany';
import AuthLoginCompany from './AuthLoginCompany';
import AuthLoginWorker from './AuthLoginWorker';
import AuthRegisterWorker from './AuthRegisterWorker';
import detailProfileCompany from './DetailProfileCompany';
import editProfileCompany from './EditProfileCompany';
import showWorker from './ShowWorker';
import showSkillWorker from './ShowSkillWorker';

const rootReducers = combineReducers({
  AuthRegisterCompany,
  AuthLoginCompany,
  AuthRegisterWorker,
  AuthLoginWorker,
  detailProfileCompany,
  editProfileCompany,
  showWorker,
  showSkillWorker,
});

export default rootReducers;
