import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { NavBar } from "../../components";
import type { TodoDetailProps } from "../types.props";
import {
  todosActions,
  getTodo,
  useAppSelector,
  useAppDispatch,
} from "../../store";

export default function TodoDetail({ route }: TodoDetailProps) {
  const { todoId } = route.params;
  const dispatch = useAppDispatch();

  const todo = useAppSelector(getTodo(todoId));

  const onChangeTodoDone = () => {
    dispatch(todosActions.changeTodoDone(todoId));
  };

  const onDeleteTodo = () => {
    dispatch(todosActions.deleteTodo(todoId));
  };

  return (
    <View>
      <View style={styles.todoItem}>
        {todo?.isDone ? (
          <Icon name="check" size={30} />
        ) : (
          <Icon name="times" size={30} />
        )}
        <Text style={[todo?.isDone && styles.textDone]}>{todo?.text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onChangeTodoDone}>
          <Text>{todo?.isDone ? "Remove from Done" : "Mark as Done"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.delete]}
          onPress={onDeleteTodo}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
  },
  textDone: {
    textDecorationLine: "line-through",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    gap: 8,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ffc8",
    padding: 8,
  },
  delete: {
    backgroundColor: "#ff4545",
  },
});
