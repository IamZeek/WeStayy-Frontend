import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import TopHeader from "../../components/Common/HomepageComponents/TopHeader";
import QuickFilters from "../../components/Common/HomepageComponents/QuickFilters";
import TrendingDestinations from "../../components/Common/HomepageComponents/TrendingDestinations";
import FeaturedProperties from "../../components/Common/HomepageComponents/FeaturedProperties";
import FloatingActionButton from "../../components/Common/HomepageComponents/FloatingActionButton";
import BottomNav from "../../components/Common/HomepageComponents/BottomNav";

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <ScrollView>
        <TopHeader onSearch={() => alert("Opening search...")} />
        <QuickFilters />
        <TrendingDestinations onItemPress={() => navigation.navigate("Resident")}/>
        <FeaturedProperties onItemPress={() => navigation.navigate("Resident")}/>
      </ScrollView>
      <FloatingActionButton onPress={() => alert("Opening map view")} />
      <BottomNav />
    </SafeAreaView>
  );
}
