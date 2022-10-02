import { axiosInstance } from "services/httpInstance";
import { AuthResponse } from "interfaces/response";
import {
  loginReducer,
  registerReducer,
  logoutReducer,
} from "store/slices/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { setToken, clearToken } from "helpers/localStorage/tokens";
export const loginAction =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.post<AuthResponse>("/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken, user } = response.data;

        if (accessToken) {
          setToken(accessToken, refreshToken, user.username);
        }

        dispatch(loginReducer({ username: user.username, refreshToken }));
      }
      return response;
    } catch (error) {
      return error;
    }
  };

export const registerAction =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.post<AuthResponse>("/registration", {
        username,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken, user } = response.data;

        if (accessToken) {
          setToken(accessToken, refreshToken, user.username);
        }

        dispatch(registerReducer({ username: user.username, refreshToken }));
      }
      return response;
    } catch (error) {
      return error;
    }
  };

export const logoutAction = () => async (dispatch: Dispatch) => {
  await axiosInstance.post("/logout");
  clearToken();
  dispatch(logoutReducer());
};
