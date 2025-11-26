import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { autenticacao } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegistroScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = () => {
    createUserWithEmailAndPassword(autenticacao, email, senha)
      .then(() => {
        console.log("Usuário registrado com sucesso");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Erro ao salvar no firebase", error.message);
      });
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Registrar" onPress={cadastrarUsuario} />
    </View>
  );
}

export default RegistroScreen;
