import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import styles from "./style/style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPadrao}>
        <Text style={styles.textoTitulo}>
          Contador com React Native: {contador}
        </Text>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        <Button title="Decrementar" onPress={() => setContador(contador - 1)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
