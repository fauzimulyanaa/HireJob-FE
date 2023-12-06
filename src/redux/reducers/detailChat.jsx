const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const getDetailChatReducers = (state = initialState, action) => {
  if (action.type === 'GET_DETAIL_CHAT_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'GET_DETAIL_CHAT_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'GET_DETAIL_CHAT_ERROR') {
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

export default getDetailChatReducers;
