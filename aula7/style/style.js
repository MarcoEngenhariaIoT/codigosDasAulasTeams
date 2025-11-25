import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPadrao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  textoPadrao: {
    fontSize: 12,
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
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
    width: "80%",
  },
  inputStorage: {
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
  },
  inputDB: {
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
  },
});

export default styles;
