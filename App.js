import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style.js";
import cold from "./assets/cold.png";
import hot from "./assets/hot.png";
import { InputTem } from "./components/InputTemp/InputTemp";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay.style.js";
import { useEffect, useState } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constante.js";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert.jsx";
import {
  getOppositUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-services.js";
export default function App() {
  const [InputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [CurrentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositunit = getOppositUnit(CurrentUnit);
  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(InputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(InputValue, CurrentUnit);

      setCurrentBackground(isColdBackground ? cold : hot);
    }
  }, [InputValue, CurrentUnit]);

  function getConvertedTemperature() {
    const valueasFloat = Number.parseFloat(InputValue);
    return isNaN(valueasFloat)
      ? ""
      : convertTemperatureTo(oppositunit, valueasFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <View>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositunit}
          ></TemperatureDisplay>
        </View>
        <View style={{ width: "100%" }}>
          <InputTem
            onChangeText={setInputValue}
            defaultValue={DEFAULT_TEMPERATURE}
            unit={CurrentUnit}
          ></InputTem>
        </View>
        <View>
          <ButtonConvert
            onPress={function () {
              setCurrentUnit(oppositunit);
            }}
            unit={CurrentUnit}
          ></ButtonConvert>
        </View>
      </View>
    </ImageBackground>
  );
}
