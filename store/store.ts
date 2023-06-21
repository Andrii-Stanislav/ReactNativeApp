import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";

import { persistConfig, PERSIST_MIDDLEWARE_OPTIONS } from "./persistConfig";

import todosReducer from "./slices/todos";

const rootReducers = combineReducers({
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleware) => getMiddleware(PERSIST_MIDDLEWARE_OPTIONS),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
