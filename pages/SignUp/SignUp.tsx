import { useState } from "react";
import { ActivityIndicator, StyleSheet, Button, View } from "react-native";
import { Input, Overlay } from "@rneui/themed";

import { useAuth } from "../../api/hooks/useAuth";
import { SignUpProps } from "../types.props";

export default function SignUp({ navigation }: SignUpProps) {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  const onRedirect = () => navigation.navigate("Login");

  const onSubmit = () => {
    setIsSubmiting(true);
    signUp({ email, password }).finally(() => {
      setIsSubmiting(false);
    });
  };

  return (
    <View style={styles.view}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        autoCorrect={false}
        autoCapitalize="none"
        // style={styles.input}
        returnKeyType="next"
        keyboardType="email-address"
        // onSubmitEditing
      />

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="password-new"
        secureTextEntry
        // style={styles.input}
        returnKeyType="send"
      />

      <Button title="Sign Up" onPress={onSubmit} />

      <Button title="go to login" onPress={onRedirect} />

      <Overlay isVisible={isSubmiting}>
        <ActivityIndicator size="large" />
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    gap: 8,
  },
});
