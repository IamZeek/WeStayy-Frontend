import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const filters = {
  all: {
    label: "All",
    icon: <MaterialIcons name="check-circle" size={24} color="#016064" />,
  },
  hotel: {
    label: "Hotel",
    icon: <MaterialIcons name="hotel" size={24} color="#016064" />,
  },
  apartment: {
    label: "Apartment",
    icon: <MaterialIcons name="apartment" size={24} color="#016064" />,
  },
  house: {
    label: "House",
    icon: <MaterialIcons name="house" size={24} color="#016064" />,
  },
  villas: {
    label: "Villas",
    icon: <MaterialIcons name="villa" size={24} color="#016064" />,
  },
};

export default function QuickFilters() {
  const [active, setActive] = useState("all");
  const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold,
    });
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {Object.entries(filters).map(([key, { label, icon }]) => (
        <TouchableOpacity
          key={key}
          style={[styles.chip, active === key && styles.activeChip]}
          onPress={() => setActive(key)}
        >
          {icon}
          <Text style={styles.textStyle}>{label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  chip: {
  flexDirection: 'column',             
  alignItems: 'center',             
  justifyContent: 'center',         
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 20,
  backgroundColor: "white",
  borderWidth: 3,
  borderColor: "#ddd",
  marginRight: 12,
},
  activeChip: { color:"white", borderColor: "#016064",fontFamily: "Poppins_700Bold"},
  textStyle: { fontFamily:'Poppins_400Regular'}
});
