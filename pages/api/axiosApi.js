import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "Application.json",
    },
});

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);
