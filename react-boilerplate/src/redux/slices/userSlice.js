import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveUsers = createAsyncThunk("users/retrive", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
  },
  extraReducers: {
    [retrieveUsers.pending]: function (state) {
      return { ...state, loading: true };
    },
    [retrieveUsers.fulfilled]: function (state, action) {
      return { ...state, loading: false, users: action.payload };
    },
    [retrieveUsers.rejected]: function (state) {
      return { ...state, loading: false };
    },
  },
});

export default userSlice.reducer;
