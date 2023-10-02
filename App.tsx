import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "./src/components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} />
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});
