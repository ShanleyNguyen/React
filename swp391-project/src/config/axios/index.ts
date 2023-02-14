import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceBase = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req: any) => {
  const token = localStorage.getItem("token");
  req.headers.Authorization = `Bearer ` + token;
  return req;
});

axiosInstance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: any) => {
    if (err.response.status === 401) {
    }
    return Promise.reject(err);
  }
);
