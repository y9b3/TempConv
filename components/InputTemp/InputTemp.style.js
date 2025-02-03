import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    width: "100%",
    paddingLeft: 25,
  },
  unit: {
    color: "black",
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 30,
  },
});

export { s };
