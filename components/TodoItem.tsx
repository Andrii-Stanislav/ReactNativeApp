import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListItem, Button } from "@rneui/themed";
import { FadeInView } from "./FadeInView";

type Props = {
  text: string;
  isDone: boolean;
  onPress: () => void;
  onLongPress: () => void;
  onDelete: () => void;
};

export const TodoItem = ({
  text,
  isDone,
  onPress,
  onLongPress,
  onDelete,
}: Props) => {
  return (
    <FadeInView>
      <ListItem.Swipeable
        rightContent={() => (
          <Button
            title="Delete"
            onPress={onDelete}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        )}
      >
        <ListItem.Content>
          <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <Text
              style={[styles.text, isDone && styles.isDone]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {text}
            </Text>
          </TouchableOpacity>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#00ffc877",
    padding: 8,
  },

  text: {
    color: "#000",
  },
  isDone: {
    textDecorationLine: "line-through",
  },
});
