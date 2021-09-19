import React from "react";
import { Text, View, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

function Details({ route, navigation }) {
  const [email, setemail] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);
  // const [fullRecipe, setfullRecipe] = React.useState({});
  const [fullRecipe, setfullRecipe] = React.useState({});
  React.useEffect(() => {
    if (route.params?.username) {
      queryAPI();
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.username]);
  function queryAPI() {
    axios({
      url: `https://ec463-d86c6-default-rtdb.firebaseio.com/${route.params?.username}/recipe.json`,
      method: "get",
    }).then((res) => {
      if (!res.data) {
        Alert.alert("Alert", "nothing has been created yet!");
      } else {
        var recipeName = Object.keys(res.data);
        setfullRecipe(res.data);
        console.log(fullRecipe);
        setRecipes(recipeName.slice(0, 5));
        console.log(recipeName);
      }
    });
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {recipes.map((recipeName) => (
        <View key={recipeName} style={localstyles.foodItem}>
          <View style={localstyles.row}>
            <Text style={localstyles.bold}>description: </Text>
            <Text>{recipeName}</Text>
            <Button
              title="show Details"
              onPress={() => {
                console.log(fullRecipe + "2");
                Alert.alert(recipeName, JSON.stringify(fullRecipe[recipeName]));
              }}
            />
          </View>
        </View>
      ))}
      <Button
        title="Food Search"
        onPress={() => navigation.navigate("FoodSearch")}
      />

      <Button title="Recipes" onPress={() => navigation.navigate("Recipes")} />
    </View>
  );
}
export default Details;
const localstyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  foodContainer: {
    flex: 1,
    padding: 2,
  },
  foodItem: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#e1e1e1",
    marginBottom: 10,
    padding: 5,
  },
  row: {
    // flex: 1,
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
  },
  foodCategory: {
    width: 200,
    overflow: "hidden",
  },
});
