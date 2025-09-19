import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const dummyUserData = {
  name: 'Jane Doe',
  bio: 'Superhost and explorer. I love connecting with people and sharing my home in the heart of the city.',
  profilePic: 'https://placehold.co/150x150.png',
  properties: [
    { id: '1', title: 'Urban Loft Retreat', rating: 4.9, image: 'https://placehold.co/400x300.png' },
    { id: '2', title: 'Cozy Mountain Cabin', rating: 4.8, image: 'https://placehold.co/400x300.png' },
    { id: '3', title: 'Beachfront Bungalow', rating: 5.0, image: 'https://placehold.co/400x300.png' },
  ],
};

const PropertyCard = ({ item }) => (
  <View style={styles.propertyCard}>
    <Image source={{ uri: item.image }} style={styles.propertyImage} />
    <View style={styles.propertyInfo}>
      <Text style={styles.propertyTitle}>{item.title}</Text>
      <View style={styles.ratingRow}>
        <Icon name="star" size={14} color="#FFD700" style={{ marginRight: 4 }} />
        <Text style={styles.propertyRating}>{item.rating}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.editPropertyButton}>
      <Text style={styles.editPropertyText}>Manage</Text>
    </TouchableOpacity>
  </View>
);

const MyProfilePageMinimal = () => {
  const handleEditProfile = () => {
    console.log('Navigating to Edit Profile screen...');
    // Add your navigation logic here
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Add your authentication/logout logic here
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileHeaderContent}>
          <Image source={{ uri: dummyUserData.profilePic }} style={styles.profilePic} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{dummyUserData.name}</Text>
            <Text style={styles.bio}>{dummyUserData.bio}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Icon name="edit-3" size={20} color="#007AFF" />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* My Properties Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Properties</Text>
        <FlatList
          data={dummyUserData.properties}
          renderItem={PropertyCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.propertyList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollEnabled={false}
        />
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Payment Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Notification Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Privacy</Text>
        </TouchableOpacity>
      </View>
      
      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profileHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flexShrink: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  editButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  propertyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  propertyImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  propertyInfo: {
    flex: 1,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  propertyRating: {
    fontSize: 14,
    color: '#666',
  },
  editPropertyButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  editPropertyText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 10,
    marginLeft: 75, // Aligns with the text
  },
  linkButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  linkButtonText: {
    fontSize: 16,
    color: '#333',
  },
  logoutContainer: {
    padding: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF5A5F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyProfilePageMinimal;