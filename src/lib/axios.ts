import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.method === "get") {
      if (!config.params) {
        config.params = {};
      }
      config.params.apiKey = process.env.API_KEY;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
