import apiClient from "../../apis/apiClient";
import { GET_CHALLENGES_LIST } from "../../constants/apiUrl";

const data = [
  {
    title: "새벽 깨우기",
    context: "정해진 시간 내 일찍 일어나 사진 인증",
    isApproved: false,
  },
  {
    title: "스터디",
    context: "주 3회 이상 개인 스터디 인증",
    isApproved: true,
  },
];

export const getChallenges = (params: any) => {
    return data;
    // TODO: SERVER API
    // apiClient
    // .get(GET_CHALLENGES_LIST, { params })
    // .then((response) => response?.data)
    // .catch((err) => {
    //   throw err;
    // });
}
