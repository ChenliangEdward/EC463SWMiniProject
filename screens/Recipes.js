import React from "react";
import { View, Button, TouchableHighlight, TextInput, Text } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

function Recipes({ navigation, route }) {
  const [recipe_name, setRecipeName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const ingredient = route.params;

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
      <Text>{JSON.stringify(ingredient)}</Text>
      <View style={styles.container}>
        <Button
          title="foodSearch"
          onPress={() => navigation.navigate("FoodSearch")}
          style={styles.recipeBtn}
        />
        <Button title="Save" style={styles.recipeBtn} />
      </View>
    </View>
  );
}
export default Recipes;
