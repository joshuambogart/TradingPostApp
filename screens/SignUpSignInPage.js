import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpSignInPage = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up / Sign In Page</Text>
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

export default SignUpSignInPage;
