import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  PanResponder,
} from "react-native";

const { width, height } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1200&fit=crop",
];

// Define sheet snap points
const MIN_SHEET_HEIGHT = height * 0.2; // e.g., 20% of screen height
const MAX_SHEET_HEIGHT = height * 0.8; // e.g., 80% of screen height
const INITIAL_SHEET_HEIGHT = MIN_SHEET_HEIGHT; // Start collapsed at the bottom

export default function PropertyScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Animated value for the sheet's height
  const sheetHeight = useRef(new Animated.Value(INITIAL_SHEET_HEIGHT)).current;
  // Animated value for the image gallery's height (interpolated from sheetHeight)
 

  // Keep track of the current sheet height for PanResponder logic
  const lastSheetHeight = useRef(INITIAL_SHEET_HEIGHT);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Only allow vertical movements
        return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
      },
      onPanResponderGrant: () => {
        sheetHeight.setOffset(lastSheetHeight.current);
        sheetHeight.setValue(0);
      },
      onPanResponderMove: Animated.event([null, { dy: sheetHeight }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        sheetHeight.flattenOffset();

        // Clamp to min and max
        let newHeight = lastSheetHeight.current + -gestureState.dy;
        newHeight = Math.max(MIN_SHEET_HEIGHT, Math.min(MAX_SHEET_HEIGHT, newHeight));

        lastSheetHeight.current = newHeight;

        sheetHeight.setValue(newHeight); // directly set to avoid snap
      },
    })
  ).current;

  const renderImage = ({ item }: { item: string }) => (
    <ImageBackground source={{ uri: item }} style={styles.galleryImage} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.headerBtnText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>↗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>♡</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Image Gallery - now animated */}
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderImage}
        keyExtractor={(_, i) => i.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        style={{ height: height * 0.8 }} // Fixed gallery height
        contentContainerStyle={{ height: height * 0.8 }}
      />


      {/* Gallery counter */}
      <View style={styles.galleryCounter}>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {currentIndex + 1} / {images.length}
        </Text>
      </View>

      {/* Content Sheet - now animated and anchored to bottom */}
      <Animated.View
        style={[
          styles.sheet,
          {
            height: sheetHeight, // Bind height to animated value
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.sheetHandle} />
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Text style={styles.title}>Luxury Villa with Pool</Text>
          <Text style={styles.subtitle}>Ubud, Bali • Entire villa</Text>
          <View style={styles.statsRow}>
            <View style={styles.badge}>
              <Text style={{ color: "white" }}>★ 4.9</Text>
            </View>
            <Text>👥 8 guests</Text>
            <Text>🛏️ 4 beds</Text>
            <Text>🚿 3 baths</Text>
          </View>
          {/* Quick actions */}
          <View style={styles.quickRow}>
            <TouchableOpacity style={styles.actionChip}>
              <Text>📅 Check dates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionChip}>
              <Text>💬 Message host</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionChip}>
              <Text>📞 Call</Text>
            </TouchableOpacity>
          </View>
          {/* Description */}
          <Text style={styles.description}>
            Escape to this stunning luxury villa nestled in the heart of Ubud's
            lush rice terraces. This beautifully designed 4-bedroom villa
            features traditional Balinese architecture with modern amenities, a
            private infinity pool, and breathtaking views of the surrounding
            jungle.
          </Text>
        </ScrollView>
      </Animated.View>

      {/* Booking Bar */}
      <View style={styles.bookingBar}>
        <Text style={styles.price}>$89 <Text style={styles.period}>night</Text></Text>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={{ color: "white", fontWeight: "700" }}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  header: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {},
  headerBtnText: { color: "white", fontSize: 24 }, // Changed to white for visibility
  headerActions: { flexDirection: "row", gap: 12 },

  galleryImage: {
    width: width,
    flex: 1, // Make ImageBackground fill available space
    justifyContent: "flex-end",
  },
  galleryCounter: {
    position: "absolute",
    top: height * 0.6 - 20, // Adjust position based on initial sheet height
    left:width / 2 - 30,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 11, // Ensure it's above the sheet
  },

  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  sheetHandle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "800", marginBottom: 4 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 12 },
  statsRow: { flexDirection: "row", gap: 12, marginBottom: 16, alignItems: "center" },
  badge: {
    backgroundColor: "#016064",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  quickRow: { flexDirection: "row", gap: 12, marginBottom: 20 },
  actionChip: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  description: { fontSize: 16, color: "#555" },

  bookingBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    zIndex: 100,
  },
  price: { fontSize: 20, fontWeight: "800", color: "#333" },
  period: { fontSize: 16, fontWeight: "400", color: "#666" },
  bookBtn: {
    backgroundColor: "#016064",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
});