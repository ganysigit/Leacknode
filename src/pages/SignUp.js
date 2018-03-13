import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Logo from "../components/Logo";
import Form from "../pages/Form";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Already have an account ?</Text>
          <Text style={styles.signUpText2}>Sign In</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e74c3c",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signUpTextCont: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16
  },
  signUpText: {
    color: "rgba(255,255,255, 0.6)",
    fontSize: 16,
    marginHorizontal: 5
  },
  signUpText2: {
    color: "rgba(255,255,255, 0.6)",
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: "500"
  }
});
