import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StackScreens from "./components/StackScreens";
import DashboardScreen from "./screens/DashboardScreen";
import PreLoader from "./screens/PreLoader";
import { useFonts } from "expo-font";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Hammer: require("./assets/fonts/HammersmithOne.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return loading ? <PreLoader setLoading={setLoading} /> : <DashboardScreen />;
}
