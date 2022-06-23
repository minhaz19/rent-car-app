import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CommonButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  Button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#ECAE36",
    borderRadius: 14,
    marginVertical: 10,
  },
  Text: {
    fontSize: 16,
    color: "black",
  },
});

