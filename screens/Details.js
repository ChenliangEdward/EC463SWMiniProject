import React from "react";
import { Text, View, TextInput, Modal, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Food Search"
        onPress={() => navigation.navigate("FoodSearch")}
      />

      <Button
        title="Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
    </View>
  );
}
export default Details;
