import React from "react";
import { Text, View, TextInput, Modal, Pressable, Alert } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";
import axios from "axios";

function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    axios({
      url: `https://ec463-d86c6-default-rtdb.firebaseio.com/${email}.json`,
      method: "put",
      data: {
        password,
      },
    }).then((res) => {
      Alert.alert("Alert", "Sign up successfully!");
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#003f5c"
          value={email}
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
      <Pressable style={styles.signupBtn} onPress={signUp}>
        <Text style={styles.textStyle}>SignUpNow!</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
