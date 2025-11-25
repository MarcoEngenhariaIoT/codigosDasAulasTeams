import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import db from "./database";
import styles from "../style/style";
const BancoDadosDexie = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    carregarUsuarios();
  });

  const adicionarUsuario = async () => {
    await db.usuarios.add({ nome, idade: parseInt(idade) });
    setNome("");
    setIdade("");
    carregarUsuarios();
  };

  const carregarUsuarios = async () => {
    const todosUsuarios = await db.usuarios.toArray();
    setUsuarios(todosUsuarios);
  };
  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.inputDB}
      />
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        style={styles.inputDB}
      />
      <Button title="Adicionar Usuário" onPress={adicionarUsuario} />
      <Button title="Carregar Usuários" onPress={carregarUsuarios} />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.nome} - {item.idade} anos
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default BancoDadosDexie;
