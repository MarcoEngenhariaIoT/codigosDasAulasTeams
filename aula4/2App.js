import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import styles from "./style/style";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Contador from "./components/Contador";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <ScrollView>
          <View style={styles.containerPadrao}>
            <Text style={styles.textoTitulo}>Aula 4 - Contador </Text>
            <Contador />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="lightgreen" style="auto" />
    </SafeAreaProvider>
  );
}
