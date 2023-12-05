import axios from 'axios';
import Swal from 'sweetalert2';

const base_url = import.meta.env.VITE_BASE_URL;

export const getDetailProfileWorker = (id) => async (dispatch, getState) => {
  let detailPekerjaUrl = `/users/pekerja/${id}`;
  try {
    dispatch({ type: 'GET_DETAIL_PROFILE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + detailPekerjaUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.result, type: 'GET_DETAIL_PROFILE_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_DETAIL_PROFILE_WORKER_ERROR' });
  }
};

export const getSkillByIdWorker = (id) => async (dispatch, getState) => {
  let skillWorkerUrl = `/skill/pekerja/${id}`;
  try {
    dispatch({ type: 'GET_SKILL_WORKER_BY_ID_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + skillWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data, type: 'GET_SKILL_WORKER_BY_ID_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_SKILL_WORKER_BY_ID_WORKER_ERROR' });
  }
};

export const updateProfileWorker = (bodyData) => async (dispatch, getState) => {
  let updateWorkerUrl = `/users/pekerja`;
  try {
    dispatch({ type: 'UPDATE_PROFILE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.put(base_url + updateWorkerUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data.result, type: 'UPDATE_PROFILE_WORKER_SUCCESS' });
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });
    dispatch(getDetailProfileWorker(id_user));
  } catch (err) {
    dispatch({ payload: err.message, type: 'UPDATE_PROFILE_WORKER_ERROR' });
  }
};

export const postSkillWorker = (data) => async (dispatch, getState) => {
  let addSkillWorkerUrl = `/skill/pekerja`;
  try {
    dispatch({ type: 'POST_SKILL_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.post(base_url + addSkillWorkerUrl, data, {
      headers: {
        token,
        'Content-Type': 'application/json',
      },
    });
    dispatch({ payload: result.data.result, type: 'POST_SKILL_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getSkillByIdWorker(id_user));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    dispatch(getSkillByIdWorker(id_user));
  } catch (err) {
    dispatch({ payload: err.message, type: 'POST_SKILL_WORKER_ERROR' });
  }
};

export const deleteSkillWorkerAction = (id) => async (dispatch, getState) => {
  let deleteSkillWorkerUrl = `/skill/pekerja/${id}`;
  try {
    dispatch({ type: 'DELETE_SKILL_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.delete(base_url + deleteSkillWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.result, type: 'DELETE_SKILL_WORKER_SUCCESS' });
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });
    dispatch(getSkillByIdWorker(id_user));
  } catch (err) {
    dispatch({ payload: err.message, type: 'DELETE_SKILL_WORKER_ERROR' });
  }
};

export const getPortfolioWorkerAction = () => async (dispatch, getState) => {
  let portfolioWorkerUrl = `/portfolio/pekerja`;
  try {
    dispatch({ type: 'GET_PORTFOLIO_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + portfolioWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_PORTFOLIO_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_PORTFOLIO_WORKER_ERROR' });
  }
};

export const postPortfolioAction = (bodyData, setFormPortfolio) => async (dispatch, getState) => {
  let addPortfolioWorkerUrl = `/portfolio/pekerja`;
  try {
    dispatch({ type: 'POST_PORTFOLIO_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    // let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.post(base_url + addPortfolioWorkerUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data, type: 'POST_PORTFOLIO_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getPortfolioWorkerAction());
        setFormPortfolio({
          photo: '',
          link_repo: '',
          type: '',
          nama_aplikasi: '',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    dispatch(getPortfolioWorkerAction());
  } catch (err) {
    dispatch({ payload: err.response.data.messsage, type: 'POST_PORTFOLIO_WORKER_ERROR' });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.response.data.messsage}`,
    });
  }
};

export const deletePortfolioWorkerAction = (id, setFormPortfolio) => async (dispatch, getState) => {
  let deletePortfolioWorkerUrl = `/portfolio/pekerja/${id}`;
  try {
    dispatch({ type: 'DELETE_PORTFOLIO_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    // let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.delete(base_url + deletePortfolioWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data, type: 'DELETE_PORTFOLIO_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Delete Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getPortfolioWorkerAction());
        setFormPortfolio({
          photo: '',
          link_repo: '',
          type: '',
          nama_aplikasi: '',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    dispatch(getPortfolioWorkerAction());
  } catch (err) {
    dispatch({ payload: err.response.data.messsage, type: 'DELETE_PORTFOLIO_WORKER_ERROR' });
  }
};

export const getDetailPortfolioWorker = (id) => async (dispatch, getState) => {
  let detailPortfolioUrl = `/portfolio/pekerja/${id}`;
  try {
    dispatch({ type: 'GET_DETAIL_PORTFOLIO_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + detailPortfolioUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_DETAIL_PORTFOLIO_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_DETAIL_PORTFOLIO_WORKER_ERROR' });
  }
};

export const updatePortfolioWorkerAction = (bodyData, setFormPortfolio, setEditPortfolio, id) => async (dispatch, getState) => {
  let updatePortfolioWorkerUrl = `/portfolio/pekerja/${id}`;
  try {
    dispatch({ type: 'UPDATE_PORTFOLIO_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.put(base_url + updatePortfolioWorkerUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data.data, type: 'UPDATE_PORTFOLIO_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getPortfolioWorkerAction());
        dispatch(getDetailPortfolioWorker(id));
        setFormPortfolio({
          photo: '',
          link_repo: '',
          type: '',
          nama_aplikasi: '',
        });
        setEditPortfolio(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  } catch (err) {
    dispatch({ payload: err.message, type: 'UPDATE_PORTFOLIO_WORKER_ERROR' });
  }
};

export const getExperienceWorkerAction = () => async (dispatch, getState) => {
  let experienceWorkerUrl = `/experience/pekerja`;
  try {
    dispatch({ type: 'GET_EXPERIENCE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + experienceWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_EXPERIENCE_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_EXPERIENCE_WORKER_ERROR' });
  }
};

export const postExperienceAction = (bodyData, setFormExperience) => async (dispatch, getState) => {
  let addExperienceWorkerUrl = `/experience/pekerja`;
  try {
    dispatch({ type: 'POST_EXPERIENCE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    // let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.post(base_url + addExperienceWorkerUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data, type: 'POST_EXPERIENCE_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getExperienceWorkerAction());
        setFormExperience({
          position: '',
          company_name: '',
          from_month: '',
          to_month: '',
          description: '',
          photo: '',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    dispatch(getExperienceWorkerAction());
  } catch (err) {
    dispatch({ payload: err.response.data.messsage, type: 'POST_EXPERIENCE_WORKER_ERROR' });
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.response.data.messsage}`,
    });
  }
};

export const deleteExperienceWorkerAction = (id, setFormExperience) => async (dispatch, getState) => {
  let deleteExperienceWorkerUrl = `/experience/pekerja/${id}`;
  try {
    dispatch({ type: 'DELETE_EXPERIENCE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    // let id_user = await getState().AuthLoginWorker.data.id_user;
    const result = await axios.delete(base_url + deleteExperienceWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data, type: 'DELETE_EXPERIENCE_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Delete Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getExperienceWorkerAction());
        setFormExperience({
          position: '',
          company_name: '',
          from_month: '',
          to_month: '',
          description: '',
          photo: '',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    dispatch(getExperienceWorkerAction());
  } catch (err) {
    dispatch({ payload: err.response.data.messsage, type: 'DELETE_EXPERIENCE_WORKER_ERROR' });
  }
};

export const getDetailExperienceWorker = (id) => async (dispatch, getState) => {
  let detailExperienceUrl = `/experience/pekerja/${id}`;
  try {
    dispatch({ type: 'GET_DETAIL_EXPERIENCE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + detailExperienceUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_DETAIL_EXPERIENCE_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_DETAIL_EXPERIENCE_WORKER_ERROR' });
  }
};

export const updateExperienceWorkerAction = (bodyData, setFormExperience, setEditExperience, id) => async (dispatch, getState) => {
  let updateExperienceWorkerUrl = `/experience/pekerja/${id}`;
  try {
    dispatch({ type: 'UPDATE_EXPERIENCE_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.put(base_url + updateExperienceWorkerUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data.data, type: 'UPDATE_EXPERIENCE_WORKER_SUCCESS' });
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: result.data.message,
      confirmButtonText: 'Ok',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getExperienceWorkerAction());
        dispatch(getDetailExperienceWorker(id));
        setFormExperience({
          position: '',
          company_name: '',
          from_month: '',
          to_month: '',
          description: '',
          photo: '',
        });
        setEditExperience(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  } catch (err) {
    dispatch({ payload: err.message, type: 'UPDATE_EXPERIENCE_WORKER_ERROR' });
  }
};
