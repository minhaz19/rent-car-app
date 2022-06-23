import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CardView from "../components/SubPages/SubCarDetails/CardView";
import TopView from "../components/SubPages/SubCarDetails/TopView";

const BookCar = () => {
  return (
    <View style={styles.container}>
      <TopView />
      <CardView />
    </View>
  );
};

export default BookCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
