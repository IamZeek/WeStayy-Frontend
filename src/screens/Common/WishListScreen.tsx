import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const savedListings = [
  {
    id: '1',
    title: 'Cozy Loft in Paris',
    location: 'Paris, France',
    price: '$89/night',
    image: 'https://fastly.picsum.photos/id/1005/600/400.jpg?hmac=Qu8h7bZlPzRjVO0VAVZu-JOWm2WFMxP99M4MJ3h_GkM',
  },
  {
    id: '2',
    title: 'Modern Studio in Tokyo',
    location: 'Tokyo, Japan',
    price: '$76/night',
    image: 'https://fastly.picsum.photos/id/1025/600/400.jpg?hmac=J6nbxOhdHzI7bsGT0_KTUrYVngVPTN8vVRVZ__RMJkU',
  },
];

export default function WishListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💾 Saved Listings</Text>
      <FlatList
        data={savedListings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
    color: '#222',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});
