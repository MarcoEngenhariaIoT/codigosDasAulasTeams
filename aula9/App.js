import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles/style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Firebase</Text>
      <StatusBar style="auto" />
    </View>
  );
}
