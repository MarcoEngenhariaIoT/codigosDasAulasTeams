import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import styles from "./style/style";
import Teste from "./teste";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <ScrollView>
          <View style={styles.containerPadrao}>
            <Text style={styles.textoTitulo}>Aula 3 </Text>
            {Array.from({ length: 200 }, (_, i) => (
              <Text key={i + 1} style={styles.textoTitulo}>
                Linha {i + 1}
              </Text>
            ))}
            <Teste />
            <StatusBar backgroundColor="lightgreen" style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
