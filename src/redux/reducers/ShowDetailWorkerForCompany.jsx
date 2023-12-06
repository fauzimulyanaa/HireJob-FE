const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const detailProfileWorkerForCompanyReducers = (state = initialState, action) => {
  if (action.type === 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'GET_DETAIL_PROFILE_WORKER_FOR_COMPANY_ERROR') {
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

export default detailProfileWorkerForCompanyReducers;
