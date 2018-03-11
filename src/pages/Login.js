import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Logo from "../components/Logo";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c0392b",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
