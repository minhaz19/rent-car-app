import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const RecommendationCard = ({ brand, name, price }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={brand} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 14 }}>
          {name}
        </Text>
        <Text style={{ color: "#ECAE36", fontSize: 14 }}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#758389",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "48%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 40,
  },
  image: {
    height: 100,
    width: 140,
    position: "absolute",
    marginTop: -100,
  },
});
