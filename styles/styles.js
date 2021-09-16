import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Futura-CondensedMedium",
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
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#20b2aa",
  },
  signupBtn: {
    width: "25%",
    borderRadius: 20,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#40e0d0",
  },
});
