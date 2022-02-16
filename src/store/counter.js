import { createSlice } from "@reduxjs/toolkit";
const counterState = { counter: 0, showToggle: true };
//creating a counter slice for the global state
const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showToggle = !state.showToggle;
    },
  },
});
//creating the action object from the counterSlice, so that you dont have to create action of your own..
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
