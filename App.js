import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        Recipe Builder
      </Text>
      <Button title="Login"></Button>
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
    fontSize: 75,
  }
});
