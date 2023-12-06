import axios from 'axios';
import Swal from 'sweetalert2';

const base_url = import.meta.env.VITE_BASE_URL;

export const registerCompanyAction = (nama, email, perusahaan, jabatan, phone, password, confPassword, navigate) => async (dispatch) => {
  let registerUrl = `/register/perekrut`;
  let bodyData = {
    nama,
    email,
    perusahaan,
    jabatan,
    phone,
    password,
    confPassword,
  };
  try {
    dispatch({ type: 'AUTH_REGISTER_PENDING' });
    const result = await axios.post(base_url + registerUrl, bodyData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'AUTH_REGISTER_SUCCESS' });
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });
    navigate('/login-company');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'AUTH_REGISTER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const loginActionCompany = (email, password, navigate) => async (dispatch) => {
  let loginUrl = `/login/perekrut`;
  let bodyData = {
    email,
    password,
  };
  try {
    dispatch({ type: 'AUTH_LOGIN_PENDING' });
    const result = await axios.post(base_url + loginUrl, bodyData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'AUTH_LOGIN_SUCCESS' });
    localStorage.setItem('status', 'company');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/edit-company');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'AUTH_LOGIN_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const registerWorkerAction = (nama, email, phone, password, confPassword, navigate) => async (dispatch) => {
  let registerUrl = `/register/pekerja`;
  let bodyData = {
    nama,
    email,
    phone,
    password,
    confPassword,
  };
  try {
    dispatch({ type: 'AUTH_REGISTER_WORKER_PENDING' });
    const result = await axios.post(base_url + registerUrl, bodyData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'AUTH_REGISTER_WORKER_SUCCESS' });
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });
    navigate('/login-worker');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'AUTH_REGISTER__WORKER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const loginActionWorker = (email, password, navigate) => async (dispatch) => {
  let loginUrl = `/login/pekerja`;
  let bodyData = {
    email,
    password,
  };
  try {
    dispatch({ type: 'AUTH_LOGIN_WROKER_PENDING' });
    const result = await axios.post(base_url + loginUrl, bodyData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'AUTH_LOGIN_WORKER_SUCCESS' });
    localStorage.setItem('status', 'worker');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/edit-worker');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'AUTH_LOGIN_WORKER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};
