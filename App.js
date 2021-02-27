import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Webview from './src/screen/Webview'
import Splash from './src/screen/Splash'

const Stack = createStackNavigator();


const HomeStack = () => (
  <Stack.Navigator initialRouteName="Splash" headerMode='none' >
    <Stack.Screen
      name="Webview"
      component={Webview}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        animationEnabled: false
      }}
    />
  </Stack.Navigator>
);


export default () => {

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};