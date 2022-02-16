import { createSlice } from "@reduxjs/toolkit";
//creating the auth slice
const authSlice = createSlice({
  name: "Auth",
  initialState: { isauthenticated: false },
  reducers: {
    login(state) {
      state.isauthenticated = true;
    },
    logout(state) {
      state.isauthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
