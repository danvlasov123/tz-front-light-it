import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "helpers/localStorage/tokens";
interface InterfaceInitialState {
  username: string;
  refreshToken: string | null;
  accessToken: string | null;
}

interface IAuthReducer {
  username: string;
  refreshToken: string;
}

const initialState: InterfaceInitialState = {
  username: getToken().username || "",
  accessToken: getToken().accessToken || null,
  refreshToken: getToken().accessToken || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerReducer(state, action: PayloadAction<IAuthReducer>) {
      state.username = action.payload.username;
      state.refreshToken = action.payload.refreshToken;
    },
    loginReducer(state, action: PayloadAction<IAuthReducer>) {
      state.username = action.payload.username;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutReducer(state) {
      state.username = "";
      state.refreshToken = null;
    },
  },
});

export const { registerReducer, loginReducer, logoutReducer } =
  userSlice.actions;

export default userSlice.reducer;
