import {NavigationContainer} from "@react-navigation/native";
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

