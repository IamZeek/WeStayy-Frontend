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

export default function RootNavigator() {
  // Simulated auth state (replace with context / async storage later)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "slide_from_bottom", // default screen animation
        }}
      >
        {isLoggedIn ? (
          <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ animation: "slide_from_bottom" }} // slide in HomeScreen
          />
          <Stack.Screen
              name="Resident"
              component={ResidentScreen} // <-- assuming you have this component
              options={{ animation: "slide_from_bottom" }}
            />
             </>
        ) : (
          <>
            <Stack.Screen name="Login" options={{animation:"slide_from_left"}}>
              {(props) => (
                <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ animation: "slide_from_right" }} // slide animation when going to SignUp
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
