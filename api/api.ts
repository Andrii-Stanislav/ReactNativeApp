import axios from "axios";
import { BASE_URL } from "@env";

import { setupInterceptorsTo } from "./Interceptors";

export const api = setupInterceptorsTo(
  axios.create({
    baseURL:
      process.env.NODE_ENV === "development"
        ? "http://192.168.0.105:5001"
        : BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
);
