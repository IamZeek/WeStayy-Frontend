import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function FloatingActionButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.emoji}>🌍</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  emoji:{fontSize:30},
  fab: { position: "absolute", bottom: 100, right: 20, width: 56, height: 56, borderRadius: 28, backgroundColor: "#016064", justifyContent: "center", alignItems: "center", color: "white", fontSize: 24, elevation: 5 },
});
