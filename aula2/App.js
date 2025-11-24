import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./style/style";

export default function App() {
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>eng. Marco Aurélio Machado</Text>
      <StatusBar style="auto" />
    </View>
  );
}
