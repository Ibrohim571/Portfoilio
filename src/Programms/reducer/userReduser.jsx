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
    newToken: (state, { payload }) => {
      state.token = payload;
    },
    clearUser: (state) => {
      state.user = {};
      state.token = "";
    },
  },
});

const { actions, reducer } = userReduser;
export default reducer;
export const { newUser, newToken, clearUser } = actions;
