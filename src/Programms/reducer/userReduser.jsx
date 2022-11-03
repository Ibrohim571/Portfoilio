import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

const userReduser = createSlice({
  name: "user",
  initialState,

  reducers: {
    newUser: (state, { payload }) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

const { actions, reducer } = userReduser;
export default reducer;
export const { newUser, clearUser } = actions;
