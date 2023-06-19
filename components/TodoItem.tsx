import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  onLongPress: () => void;
};

export const TodoItem = ({ text, onLongPress }: Props) => {
  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <View style={styles.box}>
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
  text: {
    color: "#000",
  },
});
