import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignUp from "./screens/SignUp";
import Details from "./screens/Details";
import FoodSearch from "./screens/FoodSearch";
import BarcodeScanner from "./screens/BarcodeScanner";
import Recipes from "./screens/Recipes";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FoodSearch" component={FoodSearch} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen name="Recipes" component={Recipes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
