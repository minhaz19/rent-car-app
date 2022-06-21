import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import NotificationScreen from "../pages/NotificationScreen";
import ProfileScreen from "../pages/ProfileScreen";

const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <stack.Navigator>
//       <stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <stack.Screen
//         name="DetailsScreen"
//         component={DetailsScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <stack.Screen
//         name="DetailsScreen"
//         component={DetailsScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <stack.Screen
//         name="NotificationScreen"
//         component={NotificationScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <stack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </stack.Navigator>
//   );
// }

function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        activeTintColor: "#ECAE36",
        inactiveTintColor: "white",
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          backgroundColor: "#758389",
          borderTopColor: "transparent",
          marginTop: -20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
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
        name="DetailsScreen"
        component={DetailsScreen}
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
