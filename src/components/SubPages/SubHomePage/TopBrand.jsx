import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TopBrandCard from "../../reusable/TopBrandCard";
import Recommendation from "./Recommendation";

const TopBrand = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 16 }}>
        <View style={styles.brandHeader}>
          <View>
            <Text style={styles.textStyle}>Top Brands</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={{ color: "#ECAE36" }}>More</Text>
            <MaterialIcons name="play-arrow" size={18} color="#ECAE36" />
          </TouchableOpacity>
        </View>
        <View style={styles.brandList}>
          <TopBrandCard brand={require("../../../utils/image/bmw.png")} />
          <TopBrandCard brand={require("../../../utils/image/mercedes.png")} />
          <TopBrandCard
            brand={require("../../../utils/image/lamborghini.png")}
          />
        </View>
        <Recommendation />
      </View>
    </View>
  );
};

export default TopBrand;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#101820",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  brandHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
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
  },
});
