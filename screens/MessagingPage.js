import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessagingPage = () => {
  return (
    <View style={styles.container}>
      <Text>Messaging Page</Text>
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

export default MessagingPage;
