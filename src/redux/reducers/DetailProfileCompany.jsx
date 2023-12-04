const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const detailProfileCompanyReducers = (state = initialState, action) => {
  if (action.type === 'GET_DETAIL_PROFILE_COMPANY_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_DETAIL_PROFILE_COMPANY_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'GET_DETAIL_PROFILE_COMPANY_ERROR') {
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

export default detailProfileCompanyReducers;
