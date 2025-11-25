import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import AsyncStorageExemplo from "./componets/AsyncStorageExemplo";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <AsyncStorageExemplo />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
  <StatusBar style="auto" />;
}
