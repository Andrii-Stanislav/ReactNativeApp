import { StyleSheet, View, Alert } from "react-native";

import { NavBar, TodoForm, TodoList } from "../../components";
import type { Todo } from "../../types";
import type { HomeProps } from "../types.props";
import {
  todosActions,
  getTodosList,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export default function Home({ navigation }: HomeProps) {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getTodosList);

  const addTodo = (params: Pick<Todo, "text" | "isDone">) => {
    if (params.text.length === 0) {
      Alert.alert("Todo text can't be empty");
      return;
    }

    dispatch(todosActions.addTodo(params));
  };

  const onDeleteTodo = (id: string) => {
    dispatch(todosActions.deleteTodo(id));
  };

  const onChangeTodoDone = (id: string) => {
    dispatch(todosActions.changeTodoDone(id));
  };

  const goToDetailPage = (todoId: string) => {
    navigation.navigate("TodoDetail", { todoId });
  };

  return (
    <View style={styles.container}>
      <NavBar title="Todo APP" />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onChangeTodoDone={onChangeTodoDone}
        onDelete={onDeleteTodo}
        goToDetailPage={goToDetailPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  text: {
    color: "lightblue",
  },
});
