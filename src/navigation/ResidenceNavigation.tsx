import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Common/HomeScreen";
import ResidentScreen from "../screens/Common/PropertyScreen";

const Stack = createNativeStackNavigator();

export default function ResidenceNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Resident" component={ResidentScreen} />
    </Stack.Navigator>
  );
}
