import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { NavBar, TodoForm, TodoList } from "../../components";
import type { Todo } from "../../types";
import type { HomeProps } from "../types.props";

export default function Home({ navigation }: HomeProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = ({ text, isDone }: { text: string; isDone: boolean }) => {
    if (text.length === 0) {
      Alert.alert("Todo text can't be empty");
      return;
    }

    setTodos((prev) => [{ id: `${Date.now()}`, text, isDone }, ...prev]);
  };

  const onDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onChangeTodoDone = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
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
