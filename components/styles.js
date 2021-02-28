import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fffd87",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTxt: {
    color: "black",
    fontSize: 20,
  },
  pick: {
    height: 60,
    width: 60,
    color: "blue",
  },
  pickerView: {
    flexDirection: "row",
  },
  txtPicker: {
    marginTop: 20,
  },
});

export default styles;
