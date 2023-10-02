import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "./src/components/Input";
import { Title } from "./src/components/Title";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.image} />
      <Title title="Acesse sua conta" isLogin={true} />
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Button text="Entrar" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 94,
  },
  container: {
    flex: 1,
    backgroundColor: "#202024",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
});
