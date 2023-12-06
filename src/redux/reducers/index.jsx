import { combineReducers } from 'redux';
import AuthRegisterCompany from './AuthRegisterCompany';
import AuthLoginCompany from './AuthLoginCompany';
import AuthLoginWorker from './AuthLoginWorker';
import AuthRegisterWorker from './AuthRegisterWorker';
import detailProfileCompany from './DetailProfileCompany';
import editProfileCompany from './EditProfileCompany';
import showWorker from './ShowWorker';
import showSkillWorker from './ShowSkillWorker';
import detailProfileWorker from './DetailProfileWorker';
import showSkillByIdWorker from './showSkillByIdWorker';
import editProfileWorker from './EditProfileWorker';
import addSkillWorker from './AddSkillWorker';
import deleteSkillWork from './DeleteSkillWorker';
import showPortfolioWorker from './ShowPortfolioWorker';
import addPortfolioWorker from './AddPortfolioWorker';
import deletePortfolioWorker from './DeletePortfolioWorker';
import showDetailPortfolioWorker from './showDetailPortfolioWorker';
import updatePortfolioWorker from './UpdatePortfolioWorker';
import showExperienceWorker from './ShowExperienceWorker';
import addExperienceWorker from './AddExperienceWorker';
import deleteExperienceWorker from './DeleteExperienceWorker';
import showDetailExperienceWorker from './ShowDetailExperienceWorker';
import updateExperienceWorker from './UpdateExperienceWorker';
import showDetailPortfolioWorkerForCompany from './ShowDetailWorkerForCompany';

const rootReducers = combineReducers({
  AuthRegisterCompany,
  AuthLoginCompany,
  AuthRegisterWorker,
  AuthLoginWorker,
  detailProfileCompany,
  editProfileCompany,
  showWorker,
  showSkillWorker,
  detailProfileWorker,
  showSkillByIdWorker,
  editProfileWorker,
  addSkillWorker,
  deleteSkillWork,
  showPortfolioWorker,
  addPortfolioWorker,
  deletePortfolioWorker,
  showDetailPortfolioWorker,
  updatePortfolioWorker,
  showExperienceWorker,
  addExperienceWorker,
  deleteExperienceWorker,
  showDetailExperienceWorker,
  updateExperienceWorker,
  showDetailPortfolioWorkerForCompany,
});

export default rootReducers;
