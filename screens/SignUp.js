import React from "react";
import { Text, View, TextInput, Modal, Pressable } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
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
      <Pressable style={styles.signupBtn}>
        <Text style={styles.textStyle}>SignUpNow!</Text>
      </Pressable>
    </View>
  );
}

export default SignUp;
