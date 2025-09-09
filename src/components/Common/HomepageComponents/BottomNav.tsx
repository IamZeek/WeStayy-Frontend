import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const tabs = [
  { key: "explore", icon: "🔍", label: "Explore" },
  { key: "wishlist", icon: "🤍", label: "Wishlist" },
  { key: "trips", icon: "✈️", label: "Trips" },
  { key: "inbox", icon: "💬", label: "Inbox" },
  { key: "profile", icon: "👤", label: "Profile" },
];

export default function BottomNav() {
  const [active, setActive] = useState("explore");

  return (
    <View style={styles.nav}>
      {tabs.map((t) => (
        <TouchableOpacity key={t.key} style={[styles.item, active === t.key && { backgroundColor: "#62a3a6" }]} onPress={() => { setActive(t.key); alert(`${t.label} selected`); }}>
          <Text style={styles.icon}>{t.icon}</Text>
          <Text style={styles.label}>{t.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: { flexDirection: "row", justifyContent: "space-around", backgroundColor: "Transparent", paddingVertical: 8, borderTopWidth: 1, borderColor: "#eee" },
  item: { alignItems: "center", justifyContent: "center", padding: 8, borderRadius: 8 },
  icon: { fontSize: 20 },
  label: { fontSize: 11, fontWeight: "500" },
});
