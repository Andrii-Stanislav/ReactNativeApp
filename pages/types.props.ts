import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  TodoDetail: { todoId: string };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type TodoDetailProps = NativeStackScreenProps<
  RootStackParamList,
  "TodoDetail"
>;
