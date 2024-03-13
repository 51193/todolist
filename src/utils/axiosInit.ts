import axios from "axios";
import { BASE_URL } from "../config";

export const axiosInit = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.interceptors.request.use(
    (config) => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token) {
        config.headers.token = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return window.location.href = "/login";
    }
  );
};
