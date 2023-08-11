import axios from 'axios';
import {Api} from '../utils/config';
import SharedPreference from '../utils/SharedPreference';
import {store} from '../../store';

const axiosRequest = axios.create({
  baseURL: Api.BASE_URL,
});

//All response from axios
axiosRequest.interceptors.response.use(
  response => {
    console.log('Response=======>', response);
    return response.data;
  },
  error => {
    console.log('Error=======>', error.response);
    console.log(error);
    if (error?.response) {
      if (error.response?.status === 401) {
        store.dispatch({type: 'USER_LOGOUT'});
        SharedPreference.clearAllData();
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
    return Promise.reject(error);
  },
);

// All request from axios
axiosRequest.interceptors.request.use(
  async config => {
    const token = await SharedPreference.getItem(
      SharedPreference.keys.TOKEN,
      '',
    );
    console.log('Token Interceptor', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosRequest;
