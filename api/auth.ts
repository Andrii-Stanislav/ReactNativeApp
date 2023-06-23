import { LoginData } from "../types";

import { api } from "./api";

export const loginReq = (body: LoginData) => api.post("/auth/login", body);

export const registerReq = (body: LoginData) =>
  api.post("/auth/registration", body);
