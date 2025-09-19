import React from "react";
import { View, ScrollView, SafeAreaView,StatusBar } from "react-native";
import TopHeader from "../../components/Common/HomepageComponents/TopHeader";
import QuickFilters from "../../components/Common/HomepageComponents/QuickFilters";
import TrendingDestinations from "../../components/Common/HomepageComponents/TrendingDestinations";
import FeaturedProperties from "../../components/Common/HomepageComponents/FeaturedProperties";


export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <StatusBar hidden />
      <ScrollView>
        <TopHeader onSearch={() => alert("Opening search...")} />
        <QuickFilters />
        <TrendingDestinations onItemPress={() => navigation.navigate("propertyScreen")}/>
        <FeaturedProperties onItemPress={() => navigation.navigate("propertyScreen")}/>
      </ScrollView>
      
    </SafeAreaView>
  );
}
