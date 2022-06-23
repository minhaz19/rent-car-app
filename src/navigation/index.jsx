import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookCar from "../pages/BookCar";
import NotificationScreen from "../pages/NotificationScreen";
import ProfileScreen from "../pages/ProfileScreen";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#ECAE36",
        inactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#758389",
          borderTopColor: "transparent",
          marginTop: -20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="home"
              size={24}
              style={{ justifyContent: "center", alignItems: "center" }}
              color={focused ? "#ECAE36" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookCar"
        component={BookCar}
        options={{
          headerShown: false,
          tabBarLabel: "Details",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="details"
              size={24}
              color={focused ? "#ECAE36" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Notification",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="notifications"
              size={24}
              color={focused ? "#ECAE36" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? "#ECAE36" : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
