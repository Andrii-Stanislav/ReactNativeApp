import { createSlice } from "@reduxjs/toolkit";

import type { User } from "../../types";

const initialState = null as User | null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    userLoggedOut: () => initialState,
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
