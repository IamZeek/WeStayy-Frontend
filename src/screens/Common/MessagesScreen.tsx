import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const messages = [
  { id: '1', sender: 'Alice', preview: 'Hi, is the apartment still available?' },
  { id: '2', sender: 'Host - John', preview: 'Check-in info: Lockbox code is 1234.' },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📬 Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.message}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.preview}>{item.preview}</Text>
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
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
    color: '#222',
  },
  message: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 12,
  },
  sender: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  preview: {
    color: '#555',
  },
});
