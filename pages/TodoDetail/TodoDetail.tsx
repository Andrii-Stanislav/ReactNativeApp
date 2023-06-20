import { StyleSheet, Text, View, Button, Image } from "react-native";

import type { TodoDetailProps } from "../types.props";

export default function TodoDetail({ navigation, route }: TodoDetailProps) {
  // console.log("todoId: ", route.params.todoId);

  return (
    <View>
      <Button title="go back" onPress={navigation.goBack} />
      <Text>TodoDetail</Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
