import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { Todo } from "../../types";

const initialState = {
  list: [] as Todo[],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text" | "isDone">>) => {
      state.list = [{ id: `${Date.now()}`, ...action.payload }, ...state.list];
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== payload);
    },
    changeTodoDone: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
