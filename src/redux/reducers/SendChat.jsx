const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const sendChatReducers = (state = initialState, action) => {
  if (action.type === 'POST_CHAT_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'POST_CHAT_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'POST_CHAT_ERROR') {
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

export default sendChatReducers;
