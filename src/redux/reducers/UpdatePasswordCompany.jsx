const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const updatePasswordCompanyReducers = (state = initialState, action) => {
  if (action.type === 'UPDATE_PASSWORD_COMPANY_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'UPDATE_PASSWORD_COMPANY_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'UPDATE_PASSWORD_COMPANY_ERROR') {
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

export default updatePasswordCompanyReducers;
