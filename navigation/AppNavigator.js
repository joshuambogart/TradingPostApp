import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpSignInPage from "../screens/SignUpSignInPage";
import MapPage from "../screens/MapPage";
import DifferentStorePage from "../screens/DifferentStorePage";
import MessagingPage from "../screens/MessagingPage";
import ProfilePage from "../screens/ProfilePage";
import SearchPage from "../screens/SearchPage";
import YourStorePage from "../screens/YourStorePage";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpSignInPage">
        <Stack.Screen name="SignUpSignInPage" component={SignUpSignInPage} />
        <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen
          name="DifferentStorePage"
          component={DifferentStorePage}
        />
        <Stack.Screen name="MessagingPage" component={MessagingPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="YourStorePage" component={YourStorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
