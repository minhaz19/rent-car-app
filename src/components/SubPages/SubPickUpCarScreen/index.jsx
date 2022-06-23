import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import CommonButton from "../../reusable/commonButton";
import RentDetails from "./RentDetails";

const details = [
  {
    id: 2,
    title: "Pickup Date",
    subTitle: "Sun-17-jun",
    name: "calendar-account-outline",
  },
  {
    id: 3,
    title: "Time",
    subTitle: "03:00 PM",
    name: "calendar-account-outline",
  },
  {
    id: 4,
    title: "Drop-off Date",
    subTitle: "Mon-25-jun",
    name: "clock-time-eight-outline",
  },
  {
    id: 5,
    title: "Time",
    subTitle: "06:22 AM",
    name: "clock-time-eight-outline",
  },
  {
    id: 1,
    title: "Pickup Location",
    subTitle: "Miramar, Diego",
    name: "location-enter",
  },
];
const SubPickUpCarPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 400 }}
        source={require("../../../utils/image/bg.jpg")}
      />

      <Image
        style={styles.imageContainer}
        resizeMode="contain"
        source={require("../../../utils/image/big-benz.png")}
      />

      <View style={styles.carHero}>
        <View style={styles.titleContainer}>
          <Text style={{ color: "white", fontSize: 20 }}>Rent Details</Text>
          <Text style={{ color: "#ECAE35", fontSize: 20 }}>$999/Day</Text>
        </View>
        <View style={{ flex: 0, marginTop: 20 }}>
          <FlatList
            data={details}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item, index }) => (
              <RentDetails
                item={item}
                iconSize={25}
                IconColor={"#ECAE35"}
                index={index}
                bg
                sm
              />
            )}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CommonButton title={"Proceed To Payment"} />
        </View>
      </View>
    </View>
  );
};

export default SubPickUpCarPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  carHero: {
    backgroundColor: "#101820",
    flexGrow: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: 35,
    paddingHorizontal: 20,
    marginTop: -15,
  },
  titleContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageContainer:{
    width: "80%",
    position: "absolute",
    top: "4%",
    zIndex: 999,
    alignSelf: "center",
  }
});
