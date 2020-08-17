import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// * Screens
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Search}
        options={{ title: "Buscar Restaurante" }}
      />
    </Stack.Navigator>
  );
}
