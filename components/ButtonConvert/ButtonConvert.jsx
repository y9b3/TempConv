import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";

function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}

export { ButtonConvert };
