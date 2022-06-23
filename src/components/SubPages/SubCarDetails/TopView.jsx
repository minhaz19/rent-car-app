import React from "react";
import { Image, StyleSheet, View } from "react-native";

const TopView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 400 }}
        source={require("../../../utils/image/bg.jpg")}
      />
    </View>
  );
};

export default TopView;

const styles = StyleSheet.create({
  container: {
    height: "33%",
  },
});
