import React from "react";
import { View, StyleSheet } from "react-native";
import HomeHeader from "../components/SubPages/SubHomePage/HomeHeader";
import SearchBar from "../components/SubPages/SubHomePage/SearchBar";
import TopBrand from "../components/SubPages/SubHomePage/TopBrand";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchBar />
      <TopBrand />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
