import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";

import { NavBar, TodoForm, TodoList } from "./src/components";
import type { Todo } from "./src/types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.length === 0) {
      Alert.alert("Todo text can't be empty");
      return;
    }

    setTodos((prev) => [{ id: `${Date.now()}`, text }, ...prev]);
  };

  const onDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <NavBar title="Todo APP" />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />

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
