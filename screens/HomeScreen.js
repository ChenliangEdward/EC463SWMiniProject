import React from "react";
import { Text, View, TextInput, Modal, Pressable, Alert } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";
import Details from "./Details";
import axios from "axios";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  var loginApproved = false;
  function queryAPI() {
    axios({
      url: `https://ec463-d86c6-default-rtdb.firebaseio.com/${email}.json`,
      method: "get",
    }).then((res) => {
      if (!res.data) {
        Alert.alert("Alert", "Wrong Password/Username!");
      } else if (res.data.password === password) {
        navigation.navigate("Details");
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Builder</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Pressable
        style={styles.signupBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textStyle}>Sign Up</Text>
      </Pressable>

      <Pressable
        style={styles.loginBtn}
        // onPress={() => navigation.navigate("Details")}
        onPress={queryAPI}
      >
        <Text style={styles.loginText}> LOGIN</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
