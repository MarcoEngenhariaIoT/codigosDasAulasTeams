import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../style/style";

const AsyncStorageExemplo = () => {
  const [valor, setValor] = useState("");
  const [armazenarValor, setArmazenarValor] = useState("");

  const salvarDado = async () => {
    try {
      await AsyncStorage.setItem("minhaChave", valor);
    } catch (e) {
      console.error("Falha ao salvar o dado:", e);
    }
  };
  const buscarDado = async () => {
    try {
      const dado = await AsyncStorage.getItem("minhaChave");
      if (dado !== null) {
        setArmazenarValor(dado);
      }
    } catch (e) {
      console.error("Falha ao buscar dados:", e);
    }
  };

  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Exemplo AsyncStorage</Text>
      <TextInput
        style={styles.inputStorage}
        placeholder="Entre com um valor"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Salvar dado" onPress={salvarDado} />
      <Button title="Retornar dado" onPress={buscarDado} />
      <Text style={styles.textoPadrao}>Valor armazenado: {armazenarValor}</Text>
    </View>
  );
};

export default AsyncStorageExemplo;
