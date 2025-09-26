import axios, { type AxiosInstance, type AxiosResponse } from "axios";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use((response: AxiosResponse) => response,(error)=>{
    if(error.response?.status === 401){
        window.location.href = '/login'
    }
    return Promise.reject(error)
});