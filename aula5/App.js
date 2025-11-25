import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screen/HomeScreen";
import PerfilScreen from "./screen/PerfilScreen";
import LoginScreen from "./screen/LoginScreen";
import TelaInicial from "./screen/TelaInicial";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Perfil" component={PerfilScreen} /> */}
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  <StatusBar style="auto" />;
}
