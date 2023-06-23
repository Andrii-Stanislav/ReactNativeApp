import { RootState } from "./store";

// * user

export const getUser = (store: RootState) => store.user;

// * todos
export const getTodosList = (state: RootState) => state.todos.list;

export const getTodo = (id: string) => (state: RootState) =>
  state.todos.list.find((todo) => todo.id === id);
