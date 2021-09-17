import React from "react";
import { View, Button, TouchableHighlight, TextInput } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

function Recipes({ navigation }) {
  const [recipe_name, setRecipeName] = useState("");

    return (
      <View style={styles.container}>
        <View style={styles.recipeBtn}>
            <Button
            title="Add Recipe"
            onPress={() => 
              {return (
                <View style={styles.container}>
                  <TouchableHighlight onPress={() => navigation.navigate("Details")}>
                    <View style={styles.recipeBox}>
                      <TextInput
                        style={styles.TextInput}
                        placeholder="add recipe name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(recipe_name) => setRecipeName(recipe_name)}
                      />
                    </View>
                  </TouchableHighlight>
                </View>  
              )}}
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