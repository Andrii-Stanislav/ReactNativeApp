import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LoginData } from "../../types";
import { storage } from "../../services/storage";
import { useAppDispatch, userActions } from "../../store";

import { loginReq, registerReq } from "../auth";

export const useAuth = () => {
  const navigate = useNavigation();
  const dispatch = useAppDispatch();

  const signIn = async (loginData: LoginData) => {
    try {
      const { data } = await loginReq(loginData);
      dispatch(userActions.setUser(data.user));
      storage.set(storage.keys.ACCESS_TOKEN_KEY, data.token);
      navigate.navigate("Home");
    } catch (error: any) {
      Alert.alert(error?.response?.data?.message ?? error?.message);
    }
  };

  const signUp = async (loginData: LoginData) => {
    try {
      const { data } = await registerReq(loginData);
      dispatch(userActions.setUser(data.user));
      storage.set(storage.keys.ACCESS_TOKEN_KEY, data.token);
      navigate.navigate("Home");
    } catch (error: any) {
      console.log("error: ", error);
      Alert.alert(error?.response?.data?.message ?? error?.message);
    }
  };

  const signOut = () => {
    storage.remove(storage.keys.ACCESS_TOKEN_KEY);
    dispatch(userActions.userLoggedOut());
    navigate.navigate("Login");
  };

  return { signIn, signUp, signOut };
};
