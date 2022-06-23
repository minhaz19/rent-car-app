import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import RecommendationCard from "../../reusable/RecommendationCard";
import CommonButton from "../../reusable/commonButton";
import { useNavigation } from "@react-navigation/native";

const CardView = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../utils/image/big-benz.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={{ marginTop: 100, marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={{ color: "#ECAE36", fontSize: 13 }}>SUV Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={{ color: "#ECAE36", fontSize: 13 }}>Off Road</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require("../../../utils/image/lamborghini.png")}
              style={{
                resizeMode: "contain",
                height: 50,
                width: 50,
              }}
            />
          </View>
        </View>
        <Text style={{ fontSize: 20, color: "white" }}>
          lamborghini mod gta 5
        </Text>
        <Text style={{ fontSize: 20, color: "#ECAE36" }}>$500</Text>
        <View style={{ marginTop: 40 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <RecommendationCard
              brand={require("../../../utils/image/seat.png")}
              name={"BMW M21 series"}
              price={"$200"}
            //   route={"BookCar"}
              small
            />
            <RecommendationCard
              brand={require("../../../utils/image/engine.png")}
              name={"BMW Hip-Hop Series"}
              price={"$200"}
            //   route={"BookCar"}
              small
            />
            <RecommendationCard
              brand={require("../../../utils/image/piston.png")}
              name={"BMW Hip-Hop Series"}
              price={"$200"}
            //   route={"BookCar"}
              small
            />
          </ScrollView>
        </View>
        <View style={{ marginTop: 10 }}>
          <CommonButton
            title={"Book Car"}
            onPress={() => Navigation.navigate("PickUpCarScreen")}
          />
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    backgroundColor: "#101820",
    borderTopStartRadius: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    position: "absolute",
    marginTop: -100,
  },
  moreButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
    borderColor: "#ECAE36",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  brandList: {
    marginTop: 40,
  },
});
