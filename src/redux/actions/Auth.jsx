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

export const sendOtpCompanyAction = (form, navigate) => async (dispatch) => {
  let sendOtpCompanyUrl = `/users/perekrut/send-otp`;
  try {
    dispatch({ type: 'POST_OTP_COMPANY_PENDING' });
    const result = await axios.post(base_url + sendOtpCompanyUrl, form, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'POST_OTP_COMPANY_SUCCESS' });
    localStorage.setItem('status', 'company');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/send-otp');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'POST_OTP_COMPANY_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const sendOtpWorkerAction = (form, navigate) => async (dispatch) => {
  let sendOtpCompanyUrl = `/users/pekerja/send-otp`;
  try {
    dispatch({ type: 'POST_OTP_WORKER_PENDING' });
    const result = await axios.post(base_url + sendOtpCompanyUrl, form, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'POST_OTP_WORKER_SUCCESS' });
    localStorage.setItem('status', 'worker');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/send-otp');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'POST_OTP_WORKER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const verifyOtpCompanyAction = (form, navigate) => async (dispatch) => {
  let verifyOtpCompanyUrl = `/users/perekrut/change-password`;
  try {
    dispatch({ type: 'POST_VERIFY_OTP_COMPANY_PENDING' });
    const result = await axios.post(base_url + verifyOtpCompanyUrl, form, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'POST_VERIFY_OTP_COMPANY_SUCCESS' });
    localStorage.setItem('status', 'company');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/new-password');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'POST_VERIFY_OTP_COMPANY_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const verifyOtpWorkerAction = (form, navigate) => async (dispatch) => {
  let verifyOtpCompanyUrl = `/users/pekerja/change-password`;
  try {
    dispatch({ type: 'POST_VERIFY_OTP_WORKER_PENDING' });
    const result = await axios.post(base_url + verifyOtpCompanyUrl, form, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'POST_VERIFY_OTP_WORKER_SUCCESS' });
    localStorage.setItem('status', 'worker');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/new-password');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'POST_VERIFY_OTP_WORKER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const updatePasswordCompanyAction = (form, navigate) => async (dispatch, getState) => {
  let updatePasswordCompanyUrl = `/users/perekrut/reset-password`;
  try {
    dispatch({ type: 'UPDATE_PASSWORD_COMPANY_PENDING' });
    let token = await getState().verifyOtpCompany?.data?.tokenResetPassword;
    const result = await axios.post(base_url + updatePasswordCompanyUrl, form, {
      headers: {
        token,
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'UPDATE_PASSWORD_COMPANY_SUCCESS' });
    localStorage.setItem('status', 'company');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/login-company');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'UPDATE_PASSWORD_COMPANY_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};

export const updatePasswordWorkerAction = (form, navigate) => async (dispatch, getState) => {
  let updatePasswordWorkerUrl = `/users/pekerja/reset-password`;
  try {
    dispatch({ type: 'UPDATE_PASSWORD_WORKER_PENDING' });
    let token = await getState().verifyOtpWorker?.data?.tokenResetPassword;
    const result = await axios.post(base_url + updatePasswordWorkerUrl, form, {
      headers: {
        token,
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'UPDATE_PASSWORD_WORKER_SUCCESS' });
    localStorage.setItem('status', 'worker');
    Swal.fire({
      title: 'Success!',
      text: result.data.message,
      icon: 'success',
    });

    navigate('/login-worker');
  } catch (err) {
    dispatch({ payload: err.response.data, type: 'UPDATE_PASSWORD_WORKER_ERROR' });
    Swal.fire({
      title: 'Failed!',
      text: `error :  ${err.response.data.messsage || err.response.data.message} `,
      icon: 'error',
    });
  }
};
