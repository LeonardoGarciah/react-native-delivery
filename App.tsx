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
import {NativeBaseProvider} from "native-base";
export default function App() {
  return (
      <NavigationContainer>
        <Provider store={store}>
            <NativeBaseProvider>
                <Routes />
            </NativeBaseProvider>
        </Provider>
      </NavigationContainer>
  );
}

