import { StatusBar } from "expo-status-bar";
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

function SearchPage({ navigation }) {
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [foods, setFoods] = React.useState([]);

  function SendRequest(values) {
    setLoading(true);
    axios({
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ms4cOOUjiau1qvcL3RqMhabA9Fp4zYTNgWAEi97E&query=${text}`,
      method: "get",
    }).then((res) => {
      setLoading(false);
      if (res.data.foods) {
        setFoods(res.data.foods.slice(0, 5));
        console.log(res.data.foods);
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Food/Barcode here..."
      />
      <Button title="Search" onPress={SendRequest} />
      <Button
        title="Scan Barcode"
        onPress={() => navigation.navigate("BarcodeScanner")}
      />
      {loading && <ActivityIndicator size="large" />}
      <View style={styles.foodContainer}>
        {foods.map((food) => (
          <View key={food.fdcId} style={styles.foodItem}>
            <View style={styles.row}>
              <Text style={styles.bold}>description: </Text>
              <Text>{food.description}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold}>foodCategory: </Text>
              <Text>{food.foodCategory}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold}>energy: </Text>
              <Text>
                {
                  food.foodNutrients.find((n) => n.nutrientName === "Energy")
                    .value
                }
                Kcal
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
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
    padding: 10,
  },
  foodItem: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e1e1e1",
    marginBottom: 10,
    padding: 10,
  },
  row: {
    // flex: 1,
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
  },
});
