import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsCard = ({title, subtitle, image}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(`BookCar`)}
    >
      <View style={styles.imageContainer}>
        <Image source={brand} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 14 }}>{name}</Text>
        <Text style={{ color: "#ECAE36", fontSize: 14 }}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({});
