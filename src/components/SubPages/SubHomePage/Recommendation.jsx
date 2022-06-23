import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RecommendationCard from "../../reusable/RecommendationCard";

const Recommendation = () => {
  return (
    <>
      <View style={styles.brandHeader}>
        <View>
          <Text style={styles.textStyle}>Recommendation</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={{ color: "#ECAE36" }}>More</Text>
          <MaterialIcons name="play-arrow" size={18} color="#ECAE36" />
        </TouchableOpacity>
      </View>
      <View style={styles.brandList}>
        <RecommendationCard
          brand={require("../../../utils/image/big-benz.png")}
          name={"BMW M21 series"}
          price={"$200"}
          route={"BookCar"}
        />
        <RecommendationCard
          brand={require("../../../utils/image/mercedes-2.png")}
          name={"BMW Hip-Hop Series"}
          price={"$200"}
          route={"BookCar"}
        />
      </View>
    </>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  brandHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 10,
    color: "white",
  },
  moreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#758389",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  brandList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 40,
  },
});
