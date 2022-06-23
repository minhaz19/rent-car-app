import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";

const RentDetails = ({ item, iconSize, bg, sm, IconColor }) => {
  const { title, subTitle, name } = item;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg && "#272F34",
          flex: 1,
        },
      ]}
    >
      <View
        style={[
          styles.icon,
          { borderRightWidth: sm && 1, borderColor: sm && "gray" },
        ]}
      >
        <Icon name={name} iconSize={iconSize} IconColor={IconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: sm ? "white" : "gray", fontSize: 13 }}>
          {title}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: sm ? "white" : "gray",
            fontSize: 13,
          }}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default RentDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexGrow: 1,
    paddingLeft: 10,
  },
});
