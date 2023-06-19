import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  isDone: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export const TodoItem = ({ text, isDone, onPress, onLongPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={[styles.box, isDone && styles.isDone]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00ffc877",
    padding: 8,
  },
  isDone: {
    backgroundColor: "#00ffc82c",
  },
  text: {
    color: "#000",
  },
});
