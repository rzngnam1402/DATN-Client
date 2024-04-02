import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default axiosClient;
