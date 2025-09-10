import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Common/HomeScreen';
import PropertyScreen from '../screens/Common/PropertyScreen';
import MainTabs from './TabsNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainTabs} options={{ animation: "slide_from_bottom" }} />
      <Stack.Screen name="propertyScreen" component={PropertyScreen} options={{ animation: "slide_from_bottom"}} />
    </Stack.Navigator>
  );
}
