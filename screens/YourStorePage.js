import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YourStorePage = () => {
  return (
    <View style={styles.container}>
      <Text>Your Store Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default YourStorePage;
