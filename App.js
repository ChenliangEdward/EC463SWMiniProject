import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        Recipe Builder
      </Text>

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
              <Text style={styles.textStyle}>login</Text>
            </Pressable>
          </View>
      </Modal>

      <Pressable style={styles.signupBtn}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </Pressable>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}> LOGIN</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Futura-CondensedMedium',
    fontSize: 70,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#87cefa",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  loginBtn:
  {  
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#20b2aa",
  },
  signupBtn:
  {  
    width:"25%",
    borderRadius: 20,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#40e0d0",
  }
});
