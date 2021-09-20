import React from "react";
import {
  View,
  Button,
  TouchableHighlight,
  TextInput,
  Text,
  Alert,
  Pressable,
} from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import react from "react";
// import { ingredients } from "../global/global";

import axios from "axios";
function Recipes({ navigation, route }) {
  const [recipe_name, setRecipeName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  React.useEffect(() => {
    if (route.params?.ingredient) {
      global.ingredients.push(route.params?.ingredient);
      console.log(global.ingredients);
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.ingredient]);
  // const ingredient = route.params;
  function Save() {
    console.log(recipe_name);
    if (recipe_name === "") {
      Alert.alert("alert", "need to have a name！");
    } else {
      axios({
        url: `https://ec463-d86c6-default-rtdb.firebaseio.com/${global.username}/recipe.json`,
        method: "patch",
        data: {
          [recipe_name]: ingredients,
        },
      }).then((res) => {
        global.ingredients = [];
        console.log("recipe saved!!");
        navigation.navigate("Details");
      });
    }
  }
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
        value={recipe_name}
        onChangeText={(recipe_name) => setRecipeName(recipe_name)}
      />
      {ingredients.map((ingredient) => (
        <View key={ingredient.name}>
          <Text>{ingredient.name}</Text>
          <Text>{ingredient.energy}</Text>
        </View>
      ))}
      {/* <Text>{JSON.stringify(ingredients)}</Text> */}
      <View style={styles.container}>
        <Pressable
          style={styles.signupBtn}
          onPress={() => navigation.navigate("FoodSearch")}
        >
          <Text> Food Search </Text>
        </Pressable>
        <Button title="Save" style={styles.recipeBtn} onPress={Save} />
      </View>
    </View>
  );
}
export default Recipes;
