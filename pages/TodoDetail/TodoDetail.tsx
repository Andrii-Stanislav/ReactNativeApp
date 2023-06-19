import { StyleSheet, Text, View, Button } from "react-native";

import type { TodoDetailProps } from "../types.props";

export default function TodoDetail({ navigation, route }: TodoDetailProps) {
  // console.log("todoId: ", route.params.todoId);

  return (
    <View>
      <Button title="go back" onPress={navigation.goBack} />
      <Text>TodoDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
