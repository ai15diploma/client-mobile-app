import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/screens/Home";
import QRScanner from "./components/screens/QRScanner";
import StopInfo from "./components/screens/StopInfo";
import RouteInfo from "./components/screens/RouteInfo";
import RequestInfo from "./components/screens/RequestInfo";
// import Maps from "./components/Maps";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArOTTxhxDeWa4KpvPSWOg2NeY0fwYMMQE",
  authDomain: "tsdb-76c88.firebaseapp.com",
  databaseURL: "https://tsdb-76c88.firebaseio.com",
  projectId: "tsdb-76c88",
  storageBucket: "tsdb-76c88.appspot.com",
  messagingSenderId: "575087178704",
  appId: "1:575087178704:web:6f9ad15959a6dafa58bfd5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="StopInfo" component={StopInfo} />
        <Stack.Screen name="RouteInfo" component={RouteInfo} />
        <Stack.Screen name="RequestInfo" component={RequestInfo} />
        {/* <Stack.Screen
          name="Maps"
          component={Maps}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
