import React from "react";
import { Text, View, TextInput, Modal, Pressable } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
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
          <Pressable
            style={styles.signupBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>LOGIN</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable style={styles.signupBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </Pressable>

      <Pressable
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.loginText}> LOGIN</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
