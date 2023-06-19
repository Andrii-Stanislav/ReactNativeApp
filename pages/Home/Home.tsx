import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";

import { NavBar, TodoForm, TodoList } from "../../components";
import type { Todo } from "../../types";
import type { HomeProps } from "../types.props";

export default function Home({ navigation }: HomeProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.length === 0) {
      Alert.alert("Todo text can't be empty");
      return;
    }

    setTodos((prev) => [{ id: `${Date.now()}`, text, isDone: false }, ...prev]);
  };

  // const onDeleteTodo = (id: string) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

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
        goToDetailPage={goToDetailPage}
      />

      <StatusBar style="auto" />
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
