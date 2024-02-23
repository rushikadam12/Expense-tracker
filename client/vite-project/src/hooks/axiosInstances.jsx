import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://pennywise-1ssn.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Set a default timeout (in milliseconds)
});
export default axiosInstance;
