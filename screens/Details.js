import React from "react";
import { Text, View, TextInput, Modal, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";
function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to FoodSearch... again"
        onPress={() => navigation.navigate("FoodSearch")}
      />
    </View>
  );
}
export default Details;
