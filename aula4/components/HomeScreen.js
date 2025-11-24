import { Text, View, Button, Modal, Image } from "react-native";
import styles from "../style/style";
import React from "react";
import MinhaFoto from "./minhaFoto";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Bem-vindo à Home Screen!</Text>
      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.containerPadrao}>
          <Text style={styles.textoPadrao}>
            Exemplo de componente com modal
          </Text>
          <MinhaFoto />
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
