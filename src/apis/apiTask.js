import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants/constants";

const url = "task";

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
