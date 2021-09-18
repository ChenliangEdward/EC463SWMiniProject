import React from "react";
import { View, Button, TouchableHighlight, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

function addToRecipe({navigation}) {
  // need to know which recipe to add this ingredient to somehow ???
  navigation.navigate(
    "Details", 
    {ingredient: recipe_name} 
  );
}

function Recipes({ navigation }) {
  const [recipe_name, setRecipeName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  
  const RecipeThing = () => (
    <View style={styles.container}>
      <TextInput 
        onPress={() => navigation.navigate("Details")}
        style={styles.TextInput}
        placeholder="add recipe name"
        onChangeText={(recipe_name) => setRecipeName(recipe_name)}>
      </TextInput>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.recipeBtn}>
        <Button title="Add Recipe" onPress={onClick} />
        {showResults ? <RecipeThing /> : null}
        <Button
          title="Add Ingredient"
          onPress={() => navigation.navigate("FoodSearch")}
        />
      </View>
    </View>
  );
}
export default Recipes;
