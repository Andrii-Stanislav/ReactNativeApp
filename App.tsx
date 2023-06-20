import { View, StatusBar } from "react-native";

import { Pages } from "./pages";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        // hidden
      />
      <Pages />
    </View>
  );
}
