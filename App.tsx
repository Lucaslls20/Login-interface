import { StatusBar, View } from "react-native";
import React from "react";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App():any{
return (
 <NavigationContainer>
  <StatusBar backgroundColor='#38a69d' barStyle='light-content' />
  <Routes/>
 </NavigationContainer>
)
}