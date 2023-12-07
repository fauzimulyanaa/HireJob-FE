import axios from 'axios';
// import Swal from 'sweetalert2';

const base_url = import.meta.env.VITE_BASE_URL;

export const getListChatCompanyAction = () => async (dispatch, getState) => {
  let listChatUrl = `/chat/list-perekrut`;
  try {
    dispatch({ type: 'GET_LIST_CHAT_COMPANY_PENDING' });
    let token = await getState().AuthLoginCompany.data.token;
    const result = await axios.get(base_url + listChatUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_LIST_CHAT_COMPANY_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.message, type: 'GET_LIST_CHAT_COMPANY_ERROR' });
  }
};

export const getDetailChatAction = (form) => async (dispatch, getState) => {
  let detailChatUrl = `/chat/detail`;
  try {
    dispatch({ type: 'GET_DETAIL_CHAT_PENDING' });
    let tokenWorker = await getState().AuthLoginWorker?.data?.token;
    let tokenCompany = await getState().AuthLoginCompany?.data?.token;
    const result = await axios.post(base_url + detailChatUrl, form, {
      headers: {
        token: tokenCompany || tokenWorker,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'GET_DETAIL_CHAT_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err.response.data.message, type: 'GET_DETAIL_CHAT_ERROR' });
  }
};

export const postChatAction = (form, navigate, setFormChat) => async (dispatch, getState) => {
  let postChatUrl = `/chat`;
  try {
    dispatch({ type: 'POST_CHAT_PENDING' });
    let tokenWorker = await getState().AuthLoginWorker?.data?.token;
    let tokenCompany = await getState().AuthLoginCompany?.data?.token;
    const result = await axios.post(base_url + postChatUrl, form, {
      headers: {
        token: tokenCompany || tokenWorker,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    dispatch({ payload: result.data, type: 'POST_CHAT_SUCCESS' });
    navigate('/chat-page');
    dispatch(getDetailChatAction(form));
    setFormChat({
      ...form,
      message_detail: '',
    });
  } catch (err) {
    dispatch({ payload: err?.response?.data?.message, type: 'POST_CHAT_ERROR' });
  }
};

export const getListChatWorkerAction = () => async (dispatch, getState) => {
  let listChatUrl = `/chat/list-pekerja`;
  try {
    dispatch({ type: 'GET_LIST_CHAT_WORKER_PENDING' });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + listChatUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.data, type: 'GET_LIST_CHAT_WORKER_SUCCESS' });
  } catch (err) {
    dispatch({ payload: err?.response, type: 'GET_LIST_CHAT_WORKER_ERROR' });
  }
};
