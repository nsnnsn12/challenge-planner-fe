import axios from 'axios';
import { BASE_API_URL } from '../constants/appConfig';
import { API_TIMEOUT } from '../constants/common';

const apiClient = axios.create({
    baseURL: BASE_API_URL,
    timeout:API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
})


export default apiClient;