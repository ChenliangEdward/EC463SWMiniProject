import React from "react";
import axios from "axios";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { styles } from "../styles/styles";
import { string } from "prop-types";

function SearchPage({ navigation, route }) {
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [foods, setFoods] = React.useState([]);
  const ingredient = route.params;

  function SendRequest(values) {
    setLoading(true);
    axios({
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ms4cOOUjiau1qvcL3RqMhabA9Fp4zYTNgWAEi97E&query=${text}`,
      method: "get",
    }).then((res) => {
      setLoading(false);
      if (res.data.foods) {
        setFoods(res.data.foods.slice(0, 5));
        // console.log(res.data.foods);
      }
    });
  }

  return (
    <SafeAreaView style={localstyles.container}>
      <TextInput
        style={localstyles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Food/Barcode here..."
      />
      <Button style={styles.signupBtn} title="Search" onPress={SendRequest} />
      <Button
        title="Scan Barcode"
        onPress={() => navigation.navigate("BarcodeScanner")}
      />
      {loading && <ActivityIndicator size="large" />}
      <View style={localstyles.foodContainer}>
        {foods.map((food) => (
          <View key={food.fdcId} style={localstyles.foodItem}>
            <View style={localstyles.row}>
              <Text style={localstyles.bold}>description: </Text>
              <Text>{food.description}</Text>
            </View>
            <View style={localstyles.row}>
              <Text style={localstyles.bold}>foodCategory: </Text>
              <Text style={localstyles.foodCategory}>{food.foodCategory}</Text>
            </View>
            <View style={localstyles.row}>
              <Text style={localstyles.bold}>energy: </Text>
              <Text>
                {
                  food.foodNutrients.find((n) => n.nutrientName === "Energy")
                    .value
                }
                Kcal
              </Text>
            </View>
            <Button 
              title="+ to recipe" 
              onPress={() =>
                navigation.push("Recipes", {
                  ingredient: food.description,
                })
              }
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default SearchPage;

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
