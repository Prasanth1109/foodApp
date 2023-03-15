import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_LOGIN_URL
});

// http.interceptors.request.use(function (config: any) {
//     const token = localStorage.token;
//     if (token) {

//         config.headers.Authorization = token;
//     }
//     return config;
// });

export { http };
