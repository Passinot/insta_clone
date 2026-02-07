
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        // You can add logic here, e.g., adding an authorization token
        // const token = await AsyncStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        console.log('Request Sent:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        console.log('Response Received:', response);
        return response;
    },
    (error) => {

        if (error.response) {
            console.error('API Error Response:', error.response.status, error.response.data);
        } else {
            console.error('API Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
