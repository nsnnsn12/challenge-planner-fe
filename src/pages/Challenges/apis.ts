import apiClient from "../../apis/apiClient";
import { GET_CHALLENGES_LIST } from "../../constants/apiUrl";

export const getChallenges = (params: any) =>
  apiClient
    .get(GET_CHALLENGES_LIST, { params })
    .then((response) => response?.data)
    .catch((err) => {
      throw err;
    });
