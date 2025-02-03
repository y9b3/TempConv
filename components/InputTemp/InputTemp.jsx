import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemp.style";

export function InputTem({ defaultValue, onChangeText, unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Entre une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        returnKeyType="done"
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
