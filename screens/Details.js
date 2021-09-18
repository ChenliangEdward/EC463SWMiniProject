import React from "react";
import { View, Button } from "react-native";

function Details({ route, navigation }) {
  const fdcId = route.params; 

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
