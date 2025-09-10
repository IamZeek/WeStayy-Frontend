import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync(); // keep native splash until we hide it

export default function App() {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(0));
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      // Simulate loading
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Fade in logo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Heartbeat once
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.2,
            duration: 40,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(async () => {
          // Wait 1 sec total, then hide splash
          await SplashScreen.hideAsync();
          setIsSplashDone(true);
        });
      });
    };

    prepare();
  }, []);

  if (isSplashDone) {
    // ✅ After splash → show app navigation
    return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
  }

  // ✅ Show splash animation
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("./assets/logo.png")}
        style={[styles.logo, { opacity, transform: [{ scale }] }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: { width: 150, height: 150 },
});
