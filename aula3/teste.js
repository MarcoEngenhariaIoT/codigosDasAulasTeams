import React from "react";
import { View, Text } from "react-native";
import styles from "./style/style";

export default function Teste() {
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Este é um teste feito na aula 3.</Text>
    </View>
  );
}

console.log("Teste component rendered by mamtrix in VScode.");
