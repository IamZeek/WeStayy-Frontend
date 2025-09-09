import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from "react-native";

export default function TopHeader({ onSearch }: { onSearch: () => void }) {
  const [query, setQuery] = useState("");

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
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => alert("Profile menu - Login, Settings, Help")}
        >
          <Text>👤</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.searchBar} onPress={onSearch}>
        <Text style={styles.searchText}>{query || "Where are you going?"}</Text>
        <View style={styles.searchIcon}><Text>🔍</Text></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topHeader: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  logo: { flexDirection: "row", alignItems: "center" },
  logoIcon: { width: 35, height: 35, backgroundColor: "#016064", borderRadius: 50, justifyContent: "center", alignItems: "center", marginRight: 8, color: "white", fontSize: 18 },
  profileBtn: { width: 40, height: 40, borderRadius: 50, backgroundColor: "#f0f0f0", justifyContent: "center", alignItems: "center" },
  searchBar: { flexDirection: "row", alignItems: "center", padding: 15, borderRadius: 25, borderWidth: 1, borderColor: "#ddd", backgroundColor: "white", gap: 12 },
  searchText: { flex: 1, color: "#666", fontSize: 16 },
  searchIcon: { width: 30, height: 30, borderRadius: 50, justifyContent: "center", alignItems: "center", color: "white", fontSize: 14 },
});
