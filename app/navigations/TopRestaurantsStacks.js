import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// * Screens
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={TopRestaurants}
        options={{ title: "Top 5 Restaurantes" }}
      />
    </Stack.Navigator>
  );
}
