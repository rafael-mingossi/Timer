import React from "react";
import { Text, View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const Timer = (props) => {
  //use a loop to create all the numbers in the range 1 to 60
  var range = [];
  for (var i = 0; i <= 60; i++) {
    range.push(i);
  }

  return (
    <View style={{ alignItems: "center" }}>
      {/* Start of component timer */}
      <Text style={styles.mainTxt}>Select the start time:</Text>
      <View style={styles.pickerView}>
        {/* This code is for specific changes when it is Android OS, this line of Text will appear */}
        {Platform.OS === "android" && (
          <>
            <Text style={styles.txtPickerMinSec}>Min:</Text>
            <Text style={styles.txtPicker}>{props.minutes}</Text>
          </>
        )}
        <Picker
          style={styles.pick}
          selectedValue={props.minutes}
          onValueChange={(itemValue, itemIndex) => props.setMinutes(itemValue)}
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
            <Text style={styles.txtPickerMinSec}>Sec:</Text>
            <Text style={styles.txtPicker}>{props.seconds}</Text>
          </>
        )}
        <Picker
          style={styles.pick}
          selectedValue={props.seconds}
          onValueChange={(itemValue, itemIndex) => props.setSeconds(itemValue)}
        >
          {/* <Picker.Item label="0" value="0" /> */}
          {range.map(function (val) {
            return (
              <Picker.Item label={val.toString()} value={val.toString()} />
            );
          })}
        </Picker>
      </View>
      {/* End of component timer */}
    </View>
  );
};

export default Timer;
