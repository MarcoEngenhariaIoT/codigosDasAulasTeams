import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import BancoDadosDexie from "./components/BancoDadosDexie";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <BancoDadosDexie />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
//verificar o scrollview que não funcionou no navegador, talvez funcione na build apk
