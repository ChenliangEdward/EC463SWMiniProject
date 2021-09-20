import React from "react";
import { View, Button, TouchableHighlight, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

function Recipes({ navigation }) {
  const [recipe_name, setRecipeName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const RecipeThing = () => (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate("Details")}>
        <View style={styles.recipeBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="add recipe name"
            placeholderTextColor="#003f5c"
            //onChangeText={(recipe_name) => setRecipeName(recipe_name)}
          />
          <Button title="Save" />
        </View>
      </TouchableHighlight>
    </View>
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="add recipe name"
        placeholderTextColor="#003f5c"
        //onChangeText={(recipe_name) => setRecipeName(recipe_name)}
      />
      <Button
        title="foodSearch"
        onPress={() => navigation.navigate("FoodSearch")}
      />
      <Button title="Save" style={styles.recipeBtn} />
    </View>
  );
}
export default Recipes;
