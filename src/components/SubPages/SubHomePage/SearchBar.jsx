import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Search Your Dream{"\n"}Super Car To Ride
      </Text>
      <View style={styles.searchLine}>
        <TouchableOpacity style={styles.searchContainer}>
          <AntDesign name="search1" size={30} color="black" />
          <TextInput
            style={{ marginLeft: 10 }}
            placeholder="Search Your Dream Car"
          />
        </TouchableOpacity>
        <View style={styles.filerStyle}>
          <MaterialIcons name="edit-road" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  searchContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filerStyle: {
    backgroundColor: "#ECAE36",
    borderRadius: 10,
    padding: 10,
  },
});

