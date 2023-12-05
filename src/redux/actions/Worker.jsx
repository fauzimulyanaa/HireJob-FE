import axios from "axios";
// import Swal from "sweetalert2";

const base_url = import.meta.env.VITE_BASE_URL;

export const getDetailProfileWorker = (id) => async (dispatch, getState) => {
  let detailCompanyUrl = `/users/pekerja/${id}`;
  try {
    dispatch({ type: "GET_DETAIL_PROFILE_WORKER_PENDING" });
    let token = await getState().AuthLoginWorker.data.token;
    const result = await axios.get(base_url + detailCompanyUrl, {
      headers: {
        token,
      },
    });
    dispatch({ payload: result.data.result, type: "GET_DETAIL_PROFILE_WORKER_SUCCESS" });
  } catch (err) {
    dispatch({ payload: err.message, type: "GET_DETAIL_PROFILE_WORKER_ERROR" });
  }
};
