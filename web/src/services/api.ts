import axios from 'axios';

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3333/",   
});
