import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// * Screens
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Account}
        options={{ title: "Mi Cuenta" }}
      />
    </Stack.Navigator>
  );
}
