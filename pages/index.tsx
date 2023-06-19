import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import TodoDetail from "./TodoDetail";
import type { RootStackParamList } from "./types.props";

const Stack = createNativeStackNavigator<RootStackParamList>();

const ROUTES = [
  { name: "Home", component: Home, title: "Welcome" },
  { name: "TodoDetail", component: TodoDetail },
] as { name: keyof RootStackParamList; component: FC; title?: string }[];

export const Pages = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {ROUTES.map((page) => (
        <Stack.Screen
          name={page.name}
          component={page.component}
          options={{
            title: page.title,
            headerStyle: {
              backgroundColor: "#00ffc8",
            },
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
