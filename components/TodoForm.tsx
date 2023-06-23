import { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Input, Button, Switch } from "@rneui/themed";

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
      <View style={styles.input}>
        <Input
          value={text}
          onChangeText={setText}
          placeholder="Enter todo text"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="done"
        />
      </View>
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
    width: "60%",
    paddingHorizontal: 8,
  },
  button: {
    width: "20%",
  },
});
