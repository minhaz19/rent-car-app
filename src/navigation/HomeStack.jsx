import PickUpCarScreen from "../pages/PickUpCarScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";

const stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <stack.Navigator>
      <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
          headerShown: false,
        }}
        />
      <stack.Screen
        name="PickUpCarScreen"
        component={PickUpCarScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
}

export default HomeStack;
