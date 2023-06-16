import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import type { Todo } from "../types";

import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
};

export const TodoList = ({ todos, onDeleteTodo }: Props) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          text={item.text}
          onLongPress={onDeleteTodo.bind(null, item.id)}
        />
      )}
      keyExtractor={({ id }) => id}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  separator: {
    height: 8,
  },
});
