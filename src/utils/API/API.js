import axios from 'axios';
import * as urlsApi from '../contants/urlsApi';

const API = axios.create({
  baseURL: urlsApi.basePath,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
