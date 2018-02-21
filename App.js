import React from "react";
import RootNavigation from "./root";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return <RootNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
