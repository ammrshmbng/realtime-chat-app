import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://just-youthfulness-production.up.railway.app/api/",
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});
