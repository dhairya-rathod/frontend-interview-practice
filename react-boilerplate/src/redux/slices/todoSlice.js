import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveTodos = createAsyncThunk("todos/retrive", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonRes = await res.json();
  return jsonRes;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: false,
    todos: [],
  },
  extraReducers: {
    [retrieveTodos.pending]: (state) => {
      return { ...state, loading: true };
    },
    [retrieveTodos.fulfilled]: (state, action) => {
      return { ...state, loading: false, todos: action.payload };
    },
  },
});

export default todoSlice.reducer;
