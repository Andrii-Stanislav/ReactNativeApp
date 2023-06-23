import { useState, useMemo } from "react";
import { StyleSheet, Text, View, ScrollView, Modal } from "react-native";
import { Button, Icon, ListItem } from "@rneui/themed";

import BigButton from "./BigButton";
import { useAuth } from "../api/hooks/useAuth";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onOpen = () => setMenuOpen(true);
  const onClose = () => setMenuOpen(false);

  const { signOut } = useAuth();

  const onLogOut = () => {
    onClose();
    signOut();
  };

  const MODAL_LIST_ITEMS = useMemo(
    () => [
      {
        title: "Log out",
        icon: "logout",
        onPress: onLogOut,
      },
      {
        title: "Close",
        icon: "close",
        onPress: onClose,
      },
    ],
    [onClose]
  );

  return (
    <View style={styles.navBar}>
      <Text>Title</Text>
      <BigButton />
      <Button radius="sm" type="solid" color="white" onPress={onOpen}>
        <Icon name="menu" color="#00ffc8" />
      </Button>

      <Modal visible={menuOpen} onRequestClose={onClose} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalScrollList}>
          {MODAL_LIST_ITEMS.map((item) => (
            <ListItem key={item.title} onPress={item.onPress}>
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingBottom: 32,
    backgroundColor: "#00ffc8",
  },
  modalScrollList: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
});
