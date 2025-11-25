import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "../style/style";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = () => {
    if (email.trim() === "" || senha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    } else {
      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      } else {
        if (!email.includes("@")) {
          alert("Por favor, insira um email válido.");
          return;
        } else {
          if (
            email === "marcoengenhariaiot@gmail.com" &&
            senha === "1q2w3e4r"
          ) {
            navigation.navigate("TelaInicial", { email });
          } else {
            alert("Acesso negado!");
          }
        }
      }
    }
  };

  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Faça Login para entrar</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Login" onPress={realizarLogin} />
    </View>
  );
}

export default LoginScreen;
