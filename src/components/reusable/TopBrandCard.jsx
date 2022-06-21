import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const TopBrandCard = ({ brand }) => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image
        source={brand}
        style={{
          resizeMode: "contain",
          height: 50,
          width: 50,
        }}
      />
    </TouchableOpacity>
  );
};

export default TopBrandCard;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    backgroundColor: "#758389",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
});
