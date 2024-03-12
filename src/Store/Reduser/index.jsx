import { combineReducers } from "redux";
import { autenticazioneSlice } from "./login";

export default combineReducers({
  autenticazione: autenticazioneSlice.reducer,
});
