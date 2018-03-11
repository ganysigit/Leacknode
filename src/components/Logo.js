import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../images/Logo.png")}
        />
        <Text style={styles.logoText}>Kreativitas Tanpa Batas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "#ecf0f1"
  }
});
