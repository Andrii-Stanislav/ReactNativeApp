import { StyleSheet, FlatList, View } from "react-native";

import type { Todo } from "../types";

import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
  onChangeTodoDone: (id: string) => void;
  onDelete: (id: string) => void;
  goToDetailPage: (todoId: string) => void;
};

export const TodoList = ({
  todos,
  onChangeTodoDone,
  onDelete,
  goToDetailPage,
}: Props) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          text={item.text}
          isDone={item.isDone}
          onPress={goToDetailPage.bind(null, item.id)}
          onLongPress={onChangeTodoDone.bind(null, item.id)}
          onDelete={onDelete.bind(null, item.id)}
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
