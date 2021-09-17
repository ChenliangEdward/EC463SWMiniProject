import React from "react";
import { View, Button, Example } from "react-native";
import { styles } from "../styles/styles";

function Recipes({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.recipeBtn}>
            <Button
            title="Add Recipe"
            onPress={() => navigation.navigate("Details")}
            />
            <Button
            title="Add Ingredient"
            onPress={() => navigation.navigate("FoodSearch")}
            />
        </View>

      </View>  
    );
  }
  export default Recipes;