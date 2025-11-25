import { View, Text, Button } from "react-native";
import styles from "../style/style";

function PerfilScreen({ navigation }) {
  return (
    <View style={styles.containerPadrao}>
      <Text style={styles.textoTitulo}>Bem vindo ao Perfil!</Text>
      <Button
        title="Ir para a tela de Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default PerfilScreen;
