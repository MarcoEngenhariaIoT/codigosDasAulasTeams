import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { autenticacao } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = (navigation) => {
    signInWithEmailAndPassword(autenticacao, email, senha)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Erro ao realizar login:", error.message);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={realizarLogin} />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate("Registrar")}
      />
    </View>
  );
}

export default LoginScreen;
