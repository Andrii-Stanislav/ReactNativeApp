import { View, Text, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store";
import { Pages } from "./pages";

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <StatusBar
            barStyle="dark-content"
            // hidden
          />
          <Pages />
        </View>
      </PersistGate>
    </Provider>
  );
}
