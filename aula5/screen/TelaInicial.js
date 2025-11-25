import React from "react";
import { View, Text } from "react-native";
import styles from "../style/style";

function TelaInicial({ route }) {
  const { email } = route.params;

  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Bem vindo {email}</Text>
    </View>
  );
}

export default TelaInicial;
