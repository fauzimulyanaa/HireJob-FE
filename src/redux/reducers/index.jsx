
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
import listChatCompany from './ListChatCompany';
import detailChat from './detailChat';
import sendChat from './SendChat';
import listChatWorker from './ListChatWorker';
import AuthLogout from './AuthLogout';
import sendOtpCompany from './SendOtpCompany';
import sendOtpWorker from './SendOtpWorker';
import verifyOtpCompany from './VerifyOtpCompany';
import verifyOtpWorker from './VerifyOtpWorker';
import updatePasswordCompany from './UpdatePasswordCompany';
import updatePasswordWorker from './UpdatePasswordWorker';


const rootReducers = combineReducers({
  AuthRegisterCompany,
  AuthLoginCompany,
  AuthRegisterWorker,
  AuthLoginWorker,
  AuthLogout,
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
  listChatCompany,
  detailChat,
  sendChat,
  listChatWorker,
  sendOtpCompany,
  sendOtpWorker,
  verifyOtpCompany,
  verifyOtpWorker,
  updatePasswordCompany,
  updatePasswordWorker,
});

export default rootReducers;
