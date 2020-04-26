import axios from 'axios';

const api = axios.create({
  baseURL: 'https://roh7771-danetki-api.glitch.me/api/v1',
  timeout: 20000,
});

export default api;
