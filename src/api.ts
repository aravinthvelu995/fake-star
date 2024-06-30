import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

// request interceptor to add authorization header for every secure call to teh api
api.interceptors.request.use(
  function (config) {
    const token = `${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`;
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// intercepts 401 and 403 status
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
