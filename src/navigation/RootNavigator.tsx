import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "../navigation/AuthNavigator";
import MainNavigator from "./MainNavigator";



const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  // Simulated auth state (replace with context / async storage later)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "slide_from_bottom", 
        }}
      >
        {isLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={MainNavigator}
          />
        ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />

        )}
      </Stack.Navigator>
  );
}
