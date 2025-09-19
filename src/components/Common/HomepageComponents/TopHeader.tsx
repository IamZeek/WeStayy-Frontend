import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";
import { Feather, EvilIcons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';

const texts = [' go', ' stay'];

export default function TopHeader({ onSearch }: { onSearch: () => void }) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_400Regular,
  });

  // ✅ Always run hooks, even if fonts aren't loaded yet
  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.topHeader}>
      <View style={styles.headerContent}>
        <View style={styles.logo}>
          <Image
            source={require('../../../../assets/logo.png')}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <Text style={{ color: "#016064", fontWeight: "bold", fontSize: 20 }}>WeStayy</Text>
        </View>
        <TouchableOpacity style={styles.searchBar} onPress={onSearch}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.salutationsView}>
        <Text style={styles.salutations}>Hi, There!</Text>
        <Text style={styles.secondrysalutations}>Let's find you a perfect stay.</Text>
      </View>

      <TouchableOpacity style={styles.searchBar} onPress={onSearch}>
        <View style={styles.searchIcon}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        <Text style={styles.searchText}>
          Where To 
          <Animated.Text style={[styles.searchText, { opacity: fadeAnim }]}>
            {texts[index]}
          </Animated.Text>
          ?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topHeader: {
    paddingTop: 17,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 5
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    width: 35,
    height: 35,
    backgroundColor: "#016064",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    color: "white",
    fontSize: 18,
  },
  salutationsView: {
    marginBottom: 30,
  },
  salutations: {
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
  },
  secondrysalutations: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  searchBar: {
    flexDirection: "row",
    alignContent: 'center',
    alignItems: "center",
    padding: 5,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    marginTop: 10,
  },
  searchText: {
    marginLeft: 20,
    color: "#666",
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});
