import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import image from "../../../utils/image/img_1.png"

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerNav}>
        <Entypo name="location-pin" size={30} color="#ECAE36" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "gray" }}>Your Location</Text>
          <Text style={styles.headerText}>Miramar, San Dieago</Text>
        </View>
      </View>
      <View style={styles.headerImage}>
        <Image
          style={{
            resizeMode: "contain",
            height: 50,
            width: 50,
          }}
          source={require("../../../utils/image/img_1.png")}
        />
      </View>
    </View>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "gray",
  },
  headerNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerImage: {
    marginLeft: 20,
    borderRadius: 50,
    overflow: "hidden",
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
});
