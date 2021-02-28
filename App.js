import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./components/styles";
//import AndroidTxtMin from "./components/AndroidTxtMin";

const App = () => {
  const [seconds, setSeconds] = useState("Seconds");
  const [minutes, setMinutes] = useState("Minutes");

  const [alarmSound, setAlarmSound] = useState([
    {
      selected: true,
      sound: "alarm 1",
      file: "alarm1.mp3",
    },
    {
      selected: false,
      sound: "alarm 2",
      file: "alarm2.mp3",
    },
  ]);

  //use a loop to create all the numbers in the range 1 to 60
  var range = [];
  for (var i = 1; i <= 60; i++) {
    range.push(i);
  }

  return (
    <View style={styles.mainView}>
      <StatusBar style="auto" />
      <Text style={styles.mainTxt}>Select the start time:</Text>
      <View style={styles.pickerView}>
        {/* This code is for specific changes when it is Android OS, this line of Text will appear */}
        {Platform.OS === "android" && (
          <>
            <Text style={styles.txtPicker}>{minutes}</Text>
          </>
        )}
        <Picker
          style={styles.pick}
          selectedValue={minutes}
          onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
        >
          {range.map((val) => {
            return (
              <Picker.Item label={val.toString()} value={val.toString()} />
            );
          })}
        </Picker>
        {/* This code is for specific changes when it is Android OS, this line of Text will appear */}
        {Platform.OS === "android" && (
          <>
            <Text style={styles.txtPicker}>{seconds}</Text>
          </>
        )}
        <Picker
          style={styles.pick}
          selectedValue={seconds}
          onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          {range.map(function (val) {
            return (
              <Picker.Item label={val.toString()} value={val.toString()} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default App;
