import axios from "axios";

const api = axios.create({
  baseURL: "https://essencia-backend.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
