import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const filters = ["All", "Apartments", "Houses", "Villas", "Hotels", "Unique stays"];

export default function QuickFilters() {
  const [active, setActive] = useState("All");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {filters.map((f, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.chip, active === f && styles.activeChip]}
          onPress={() => {
            setActive(f);
            alert(`Filtering by: ${f}`);
          }}
        >
          <Text style={{ color: active === f ? "white" : "#333", fontWeight: "500" }}>{f}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  chip: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 20, backgroundColor: "white", borderWidth: 1, borderColor: "#ddd", marginRight: 12 },
  activeChip: { backgroundColor: "#016064", borderColor: "#016064" },
});
