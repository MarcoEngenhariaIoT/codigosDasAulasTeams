import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import styles from "../style/style";
import { View } from "react-native";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Tela de Cadastro</Text>
      <TextInput
        style={styles.textoPadrao}
        placeholder="Name"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.textoPadrao}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textoPadrao}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
    </View>
  );
}
