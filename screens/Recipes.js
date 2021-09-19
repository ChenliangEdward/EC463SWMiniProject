import React from "react";
import { View, Button, TouchableHighlight, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

function addRecipe() {
  const [recipe_name, setRecipeName] = useState("");

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate("Details")}>
        <View style={styles.recipeBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="recipe name"
            placeholderTextColor="#003f5c"
            onChangeText={(recipe_name) => setRecipeName(recipe_name)}
          />
          <Button
            title="Save"
          />
        </View>
      </TouchableHighlight>
    </View>  
  )
}

function Recipes({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.recipeBtn}>
            <Button
            title="Add Recipe"
            onPress={() => {addRecipe}}
            />
        </View>
      </View>  
    );
  }
  export default Recipes;