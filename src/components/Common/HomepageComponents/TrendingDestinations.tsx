import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";

const destinations = [
  { name: "Paris", emoji: "🗼", url:"https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ", price: "$89/night" },
  { name: "Tokyo", emoji: "🏯", url:"https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w", price: "$76/night" },
  { name: "New York", emoji: "🏙️", url:"https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o", price: "$125/night" },
  { name: "Bali", emoji: "🏝️", url:"https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY", price: "$45/night" },
  { name: "London", emoji: "🏰", url:"https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8", price: "$98/night" },
];

export default function TrendingDestinations({ onItemPress }: any) {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Destinations</Text>
        <TouchableOpacity onPress={() => alert("Showing all trending destinations...")}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {destinations.map((d, idx) => (
          <TouchableOpacity key={idx} style={styles.card} onPress={onItemPress}>
            <View style={styles.imagecontainer}>
              <Image source={{uri:d.url}} style={styles.emojiImage}/>
            </View>
            <View style={{ padding: 12 }}>
              <Text style={styles.name}>{d.name}</Text>
              <Text style={styles.price}>{d.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  seeAll: { color: "#016064", fontWeight: "600" },
  scroll: { paddingHorizontal: 20, paddingVertical: 10 },
  card: { minWidth: 160, backgroundColor: "white", borderRadius: 15, marginRight: 15, overflow: "hidden", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 3 },
  imagecontainer: { alignItems: "center",height: 180, justifyContent: "center" },
  emojiImage:{width: "100%", height: "100%", resizeMode: "cover",},
  name: { fontWeight: "600", marginBottom: 4 },
  price: { color: "#666", fontSize: 12 },
});
