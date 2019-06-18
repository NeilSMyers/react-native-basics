import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import Toggle from "./Toggle";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={styles.button}
      >
        <Text>Sub</Text>
      </TouchableOpacity>
      <Toggle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  count: {
    fontSize: 75
  },
  button: {
    padding: 15,
    backgroundColor: "#00cb78",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    fontSize: 40
  }
});
