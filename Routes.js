import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Drawer = createDrawerNavigator();


import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator();


import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Daily from "./pages/Dailylogs";


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="back"
          component={Home1}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Daily"
          component={Daily}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
