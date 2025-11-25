import { View, Text, Button } from "react-native";
import styles from "../style/style";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Bem vindo ao Home Screen!</Text>
      <Button
        title="Ir para a tela de perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

export default HomeScreen;
