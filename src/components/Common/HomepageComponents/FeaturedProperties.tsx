import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const properties = [
  { title: "Modern Apartment", location: "Manhattan, New York", url:"https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ", badge: "Superhost", price: "$189/night", rating: "⭐4.9 (127)" },
  { title: "Cozy Villa", location: "Ubud, Bali", url:"https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w", badge: "New", price: "$67/night", rating: "⭐4.8 (89)" },
  { title: "Luxury Loft", location: "Shibuya, Tokyo", url:"https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY", badge: "Popular", price: "$145/night", rating: "⭐4.9 (203)" },
  { title: "Charming Studio", location: "Montmartre, Paris", url:"https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8", badge: "Superhost", price: "$98/night", rating: "⭐4.7 (156)" },
];

export default function FeaturedProperties({ onItemPress }: any) {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Stays</Text>
        <TouchableOpacity onPress={() => alert("Showing all featured properties...")}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {properties.map((p, idx) => (
          <TouchableOpacity key={idx} style={styles.card} onPress={onItemPress}>
            <View style={styles.imageContainer}>
              <Image source={{uri:p.url}} style={styles.imageContainer}/>
              <View style={styles.badge}><Text style={{ color: "white", fontWeight: "600", fontSize: 11 }}>{p.badge}</Text></View>
              <TouchableOpacity style={styles.heartBtn} onPress={(e) => { e.stopPropagation(); alert("Wishlist toggled"); }}><Text>🤍</Text></TouchableOpacity>
            </View>
            <View style={{ padding: 15 }}>
              <Text style={styles.location}>{p.location}</Text>
              <Text style={styles.title}>{p.title}</Text>
              <Text style={styles.rating}>{p.rating}</Text>
              <Text style={styles.price}>{p.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  seeAll: { color: "#016064", fontWeight: "600" },
  grid: { paddingHorizontal: 20, paddingBottom: 30 },
  card: { marginBottom: 20, backgroundColor: "white", borderRadius: 15, overflow: "hidden", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 3 },
  imageContainer: { height: 200, backgroundColor: "#ccc", position: "relative" },
  badge: { position: "absolute", top: 12, left: 12, backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  heartBtn: { position: "absolute", top: 12, right: 12, width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 16, justifyContent: "center", alignItems: "center" },
  location: { fontSize: 13, color: "#666", marginBottom: 5 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  rating: { fontSize: 13, marginBottom: 8 },
  price: { fontSize: 16, fontWeight: "600", color: "#333" },
});
