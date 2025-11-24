import { Image } from "react-native";
import styles from "../style/style";

export default function MinhaFoto() {
  return (
    <Image
      style={styles.fotoModal}
      source={{
        uri: "https://avatars.githubusercontent.com/u/170987656?v=4",
      }}
    />
  );
}
