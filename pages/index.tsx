import { FC, memo, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getUser, useAppSelector } from "../store";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import TodoDetail from "./TodoDetail";
import type { RootStackParamList } from "./types.props";

const Stack = createNativeStackNavigator<RootStackParamList>();

type RouteType = {
  name: keyof RootStackParamList;
  component: FC;
  title?: string;
};

const AUTH_ROUTES = [
  { name: "Login", component: Login },
  { name: "SignUp", component: SignUp },
] as RouteType[];

const PRIVATE_ROUTES = [
  { name: "Home", component: Home, title: "Welcome" },
  { name: "TodoDetail", component: TodoDetail },
] as RouteType[];

export const Pages = () => {
  const user = useAppSelector(getUser);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(Boolean(user) ? PRIVATE_ROUTES : AUTH_ROUTES).map((page) => (
          <Stack.Screen
            key={page.name}
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
};
