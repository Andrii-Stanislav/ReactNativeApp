import { Platform, StyleSheet, Text, View } from "react-native";

import BigButton from "./BigButton";

type Props = {
  title: string;
};

export const NavBar = ({ title }: Props) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>
        {title}
        {Platform.OS}
      </Text>
      <BigButton />
      <Text style={styles.text}>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 48,
    backgroundColor: "#00ffc8",
  },
  text: {
    color: "#000",
  },
});
