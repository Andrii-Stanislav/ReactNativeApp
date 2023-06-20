import { useState } from "react";

import { StyleSheet, View, TextInput, Switch, Button } from "react-native";

type Props = {
  addTodo: (args: { text: string; isDone: boolean }) => void;
};

export const TodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const toggleSwitch = () => setIsDone((prev) => !prev);

  const addHandler = () => {
    addTodo({ text: text.trim(), isDone });
    setIsDone(false);
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
        returnKeyType="done"
      />
      <Switch onValueChange={toggleSwitch} value={isDone} />
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
    alignItems: "center",
    gap: 8,
  },
  input: {
    borderColor: "#00ffc8",
    borderWidth: 1,
    width: "60%",
    paddingHorizontal: 8,
  },
  button: {
    width: "20%",
  },
});
