import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication.js";
import counterReducer from "./counter.js";

//store provide state to the component
const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});
export default store;
