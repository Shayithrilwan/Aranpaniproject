import axios from 'axios';
import {ApiRoutes} from "../routes/routeConstants/apiRoutes";

export const getHeaders = () => {
    let headers,aranpani_access_token;
    if (localStorage.getItem('aranpani_access_token')) {
        aranpani_access_token = JSON.parse(localStorage.getItem('aranpani_access_token') || '');
    }    
    console.log(aranpani_access_token)
    headers = {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${aranpani_access_token && aranpani_access_token}`,
        ...aranpani_access_token
    };
    return headers;
};

const axiosInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL,
    timeout: 20000,
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers = getHeaders();
    return config;
});

axiosInstance.interceptors.response.use(
    (response): any => {
        return {
            data: response.data,
            message: response.statusText,
            headers: response.headers,
            status: response.status
        }
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
