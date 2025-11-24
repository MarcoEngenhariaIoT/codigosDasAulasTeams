import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../style/style";

export default function Contador() {
  const [contador, setContador] = React.useState(0);
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoPadrao}>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}
