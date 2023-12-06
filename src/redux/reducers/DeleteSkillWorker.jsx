const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
};

const deleteSkillWorkerReducers = (state = initialState, action) => {
  if (action.type === 'DELETE_SKILL_WORKER_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'DELETE_SKILL_WORKER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: action.payload,
    };
  } else if (action.type === 'DELETE_SKILL_WORKER_ERROR') {
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

export default deleteSkillWorkerReducers;
