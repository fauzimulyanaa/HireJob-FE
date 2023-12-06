import axios from 'axios';
import Swal from 'sweetalert2';

const base_url = import.meta.env.VITE_BASE_URL;

export const getDetailProfileCompany = (id) => async (dispatch, getState) => {
  let detailCompanyUrl = `/users/perekrut/${id}`;
  try {
    dispatch({ type: 'GET_DETAIL_PROFILE_COMPANY_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    const result = await axios.get(base_url + detailCompanyUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.result, type: 'GET_DETAIL_PROFILE_COMPANY_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_DETAIL_PROFILE_COMPANY_ERROR' });
  }
};

export const updateProfileCompany = (bodyData) => async (dispatch, getState) => {
  let updateCompanyUrl = `/users/perekrut`;
  try {
    dispatch({ type: 'UPDATE_PROFILE_COMPANY_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    let id_user = await getState().AuthLoginCompany.data.id_user;
    const result = await axios.put(base_url + updateCompanyUrl, bodyData, {
      headers: {
        token,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ payload: result.data.result, type: 'UPDATE_PROFILE_COMPANY_SUCCESS' });
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });
    dispatch(getDetailProfileCompany(id_user));
  } catch (err) {
    dispatch({ payload: err.message, type: 'UPDATE_PROFILE_COMPANY_ERROR' });
  }
};

export const getAllWorker = (keyword, sort, page, limit) => async (dispatch, getState) => {
  let workerUrl = `/users/pekerja/by-skill?page=${page}&limit=${limit}&search=${keyword}&sort=${sort}`;
  try {
    dispatch({ type: 'GET_WORKER_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    const result = await axios.get(base_url + workerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data, type: 'GET_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_WORKER_ERROR' });
  }
};

export const getSkillAllWorker = () => async (dispatch, getState) => {
  let skillWorkerUrl = `/skill/pekerja`;
  try {
    dispatch({ type: 'GET_SKILL_WORKER_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    const result = await axios.get(base_url + skillWorkerUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data, type: 'GET_SKILL_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_SKILL_WORKER_ERROR' });
  }
};

export const getDetailProfileWorkerForCompany = (id) => async (dispatch, getState) => {
  let detailPekerjaUrl = `/users/pekerja/${id}`;
  try {
    dispatch({ type: 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    const result = await axios.get(base_url + detailPekerjaUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.result, type: 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_ERROR' });
  }
};
