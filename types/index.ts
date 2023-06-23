export type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

export type LoginData = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
}
