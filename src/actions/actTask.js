import * as apiTask from "./../apis/apiTask";
import * as taskContants from "../constants/actTask";

export const fetchListTask = () => {
  return {
    type: taskContants.FETCH_TASK,
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskContants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFail = (error) => {
  return {
    type: taskContants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    apiTask
      .getList()
      .then((res) => {
        const { data } = res;
        console.log("data :>> ", data);
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((error) => {
        console.log("error :>> ", error);
        dispatch(fetchListTaskFail(error));
      });
  };
};
