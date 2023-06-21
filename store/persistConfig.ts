import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PERSIST_MIDDLEWARE_OPTIONS = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const persistConfig = {
  key: "memology:store",
  keyPrefix: "",
  storage: AsyncStorage,
};
