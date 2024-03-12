import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  isLoggedIn: false,
  token: null,
  userDetails: {},
  credenziali: { email: "", password: "" },
};

export const autenticazioneSlice = createSlice({
  name: "autenticazione",

  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      const decodedToken = jwtDecode(action.payload);
      (state.userDetails = { decodedToken }),
        (state.credenziali = { email: "", password: "" });
    },
    logout: (state) => {
      (state.isLoggedIn = false),
        (state.token = null),
        (state.userDetails = {}),
        (state.credenziali = { email: "", password: "" });
    },
  },
});

export const { login, logout } = autenticazioneSlice.actions;
console.log(autenticazioneSlice.actions);
