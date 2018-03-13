import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./src/pages/Login";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#c0392b" barStyle="light-content" />
        <Login />
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
  }
});
