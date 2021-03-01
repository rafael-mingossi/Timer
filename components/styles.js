import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fffd87",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "50%",
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
  txtPickerMinSec: {
    padding: 5,
    marginTop: 15,
  },
  alarmBtn: {
    backgroundColor: "#fffd87",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  btnView: {
    flexDirection: "row",
  },
  alarmBtnSelected: {
    backgroundColor: "rgba(250, 246, 37,0.5)",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  btnStart: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#ebe728",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 15,
  },
  btnStartTxt: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
  },
  viewTimerCounter: {
    flexDirection: "row",
  },
  txtTimerCounter: {
    fontSize: 35,
  },
  mainViewBtn: {
    alignItems: "center",
    ...Platform.select({
      ios: {
        marginTop: 140,
      },
    }),
  },
});

export default styles;
