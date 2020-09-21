import * as taskContants from "../constants/actTask";
const taskInitialState = {
  listTask: [],
};
const reducerTask = (state = taskInitialState, action) => {
  switch (action.type) {
    case taskContants.FETCH_TASK: {
      return {
        ...state,
        lisTask: [],
      };
    }
    case taskContants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        lisTask: data,
      };
    }
    case taskContants.FETCH_TASK_FAILED: {
      return {
        ...state,
        lisTask: [],
      };
    }
    default:
      return state;
  }
};
export default reducerTask;
