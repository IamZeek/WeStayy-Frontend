import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✈️ Your Trips</Text>
      <Text style={styles.subtext}>You have no upcoming trips.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
});
