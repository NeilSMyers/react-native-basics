import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <View style={styles.toggleWrapper}>
      <Text style={styles.screenText}>{toggle ? "Hello" : "Goodbye"}</Text>
      <Button title="Toggle" onPress={() => setToggle(!toggle)} />
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  toggleWrapper: {
    width: 200,
    justifyContent: "flex-end"
  },
  screenText: {
    fontSize: 50
  }
});
