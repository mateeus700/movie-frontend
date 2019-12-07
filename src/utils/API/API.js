import axios from 'axios';
import * as urlsApi from '../contants/urlsApi';

const API = axios.create({
  baseURL: urlsApi.basePath,
  headers: {
    'Content-Type': 'application/json',
    admin: true,
    'access-token': localStorage.getItem("data['at']"),
    client: localStorage.getItem("data['c']"),
    uid: localStorage.getItem("data['uid']")
  }
});

API.defineResponseInterceptor = route => {
  API.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        if (route.location.pathname !== '/') {
          localStorage.clear();
          route.replace('/');
        }
      }
      return Promise.reject(error);
    }
  );
};

export default API;
