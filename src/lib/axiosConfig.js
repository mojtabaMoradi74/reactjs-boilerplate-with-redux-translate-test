import axios from "axios";
import api from "config/api";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = api.baseurl;

let token = 'please insert your token';


const onRequestSuccess = (config) => {
    if (token) config.headers["Authorization"] = "JWT ".concat(token);
    // config.timeout = 10000;
    return config;
};

const onResponseSuccess = ((response) => {
    // console.log({ response });

    return response;
});

const onResponseError = (error) => {
    // console.log({ error });
    if (error.response.status == 401) {
        localStorage.removeItem(token);
        // window.location = routes.LOGIN;
    }
    if (error.response.status == 403) {
        localStorage.removeItem(token);
        // window.location = routes.LOGIN;
    }
    return Promise.reject(error);
};

axios.interceptors.request.use(onRequestSuccess);
axios.interceptors.response.use(onResponseSuccess, onResponseError);

const axiosConfig = {
    // get: axios.get,
    // post: axios.post,
    // put: axios.put,
    // put: axios.put,
    // delete: axios.delete,
    ...axios
};

export default axiosConfig;