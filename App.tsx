import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/pages/Home";
import Restaurant from "./src/pages/Restaurant";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import React from 'react';
import Routes from "./src/Routes/Routes";
export default function App() {
  return (
      <NavigationContainer>
        <Provider store={store}>
            <Routes />
        </Provider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
