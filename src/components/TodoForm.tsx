import { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

type Props = {
  addTodo: (newTOdo: string) => void;
};

export const TodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("");

  const addHandler = () => {
    addTodo(text.trim());
    setText("");
  };

  return (
    <View style={styles.box}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter todo text"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={addHandler} color="#00ffc8" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  input: {
    borderColor: "#00ffc8",
    borderWidth: 1,
    width: "70%",
    paddingHorizontal: 8,
  },
  button: {
    width: "30%",
  },
});
