import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPadrao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  textoPadrao: {
    fontSize: 17,
    textAlign: "center",
    margin: 10,
    color: "black",
  },
  textoTitulo: {
    fontSize: 24,
    textAlign: "center",
    color: "blue",
    margin: 10,
    marginBottom: 5,
  },
  fotoModal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginVertical: 20,
  },
});

export default styles;
