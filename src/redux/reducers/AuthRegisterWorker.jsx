const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const authRegisterWorker = (state = initialState, action) => {
  if (action.type === "AUTH_REGISTER_WORKER_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "AUTH_REGISTER_WORKER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === "AUTH_REGISTER_WORKER_ERROR") {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default authRegisterWorker;
