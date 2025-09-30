import { apiClient } from "@/config/client";
import type { User } from "@/types/userType";

export const createUser = async (data: User) => {
  try {
    const response = await apiClient.post(`/v1/user/register`, data);
    return response.data;
  } catch (error) {
    console.error("Error Creating User", error);
  }
};

export const loginUser = async (data: User) => {
  try {
    const response = await apiClient.post("/v1/user/login", data);
    return response.data;
  } catch (error) {
    console.error("Error Creating User", error);
  }
};

export const loggedIn = async () =>{
   try {
     const response = await apiClient.get("/v1/user/getMe");
     return response.data;
   } catch (error) {
     console.error("Error Creating User", error);
   }
}