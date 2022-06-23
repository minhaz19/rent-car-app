import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const RecommendationCard = ({ brand, name, price, small }) => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity
        style={{
          borderRadius: small ? 6 : 10,
          backgroundColor: "#758389",
          borderWidth: 1,
          borderColor: "gray",
          paddingVertical: small ? 5 : 10,
          paddingHorizontal: small ? 5 : 10,
          width: small ? 140 : "48%",
          marginRight: small ? 4 : 0,
        }}
        onPress={() => navigation.navigate(`BookCar`)}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              height: small ? 80 : 100,
              width: small ? 100 : 140,
              position: "absolute",
              marginTop: small ? -60 : -70,
            }}
          >
            <Image source={brand} style={styles.image} resizeMode="contain" />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: "white", fontSize: 14 }}>{name}</Text>
          <Text style={{ color: "#ECAE36", fontSize: 14 }}>{price}</Text>
        </View>
      </TouchableOpacity>

  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
