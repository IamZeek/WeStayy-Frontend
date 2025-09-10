import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Common/HomeScreen';
import Wishlist from '../screens/Common/WishListScreen';
import TripsScreen from '../screens/Common/TripsScreen';
import MessagesScreen from '../screens/Common/MessagesScreen';
import ProfileScreen from '../screens/Common/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#016064',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Wishlist':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Trips':
              iconName = focused ? 'airplane' : 'airplane-outline';
              break;
            case 'Messages':
              iconName = focused ? 'chatbox' : 'chatbox-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
