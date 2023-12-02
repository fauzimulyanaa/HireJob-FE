const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const authLoginWorker = (state = initialState, action) => {
  if (action.type === "AUTH_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "AUTH_LOGIN_WORKER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === "AUTH_LOGIN_WORKER_ERROR") {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
    };
  } else if (action.type === "AUTH_LOGOUT") {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: false,
      errorMessage: "",
    };
  } else {
    return state;
  }
};

export default authLoginWorker;
