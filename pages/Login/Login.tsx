import { useState } from "react";
import { ActivityIndicator, StyleSheet, Button, View } from "react-native";
import { Input, Overlay } from "@rneui/themed";

import { useAuth } from "../../api/hooks/useAuth";
import { LoginProps } from "../types.props";

export default function Login({ navigation }: LoginProps) {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const onRedirect = () => navigation.navigate("SignUp");

  const onSubmit = () => {
    setIsSubmiting(true);
    signIn({ email, password }).finally(() => {
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

      <Button title="Login" onPress={onSubmit} />

      <Button title="go to sign up" onPress={onRedirect} />

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
