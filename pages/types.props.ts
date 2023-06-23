import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  TodoDetail: { todoId: string };
};

// Pages Props

export type SignUpProps = NativeStackScreenProps<RootStackParamList, "SignUp">;

export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type TodoDetailProps = NativeStackScreenProps<
  RootStackParamList,
  "TodoDetail"
>;
