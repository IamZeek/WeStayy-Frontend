import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Common/LoginScreen";
import SignUpScreen from "../screens/Common/SignupScreen";
import HomeScreen from "../screens/Common/HomeScreen";
import ResidentScreen from "../screens/Common/PropertyScreen";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Resident: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  // Simulated auth state (replace with context / async storage later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "slide_from_bottom", // default screen animation
        }}
      > 
            <Stack.Screen name="Login" options={{animation:"slide_from_left"}}>
              {(props) => (
                <LoginScreen {...props} onLogin={() => setIsLoggedIn(false)} />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ animation: "slide_from_right" }} 
            />
      </Stack.Navigator>
  );
}
