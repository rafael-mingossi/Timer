import React from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
  //function to change the alarm button state, creating a clone of the actual array
  function setAlarm(id) {
    let alarmsClone = props.alarmSound.map(function (val) {
      if (id != val.id) val.selected = false;
      else val.selected = true;
      return val;
    });
    //after clicking the button and changing the value of selected to true, set this new state to setAlarmSound
    props.setAlarmSound(alarmsClone);
  }

  return (
    <View style={styles.mainViewBtn}>
      {/* Start of component Alarm Buttons */}
      <View style={styles.btnView}>
        {props.alarmSound.map(function (val) {
          if (val.selected) {
            return (
              <TouchableOpacity
                onPress={() => setAlarm(val.id)}
                style={styles.alarmBtnSelected}
              >
                <Text>{val.sound}</Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => setAlarm(val.id)}
                style={styles.alarmBtn}
              >
                <Text>{val.sound}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
      {/* End of component Alarm Buttons */}

      {/* Start of component Start Button */}
      <TouchableOpacity
        style={styles.btnStart}
        onPress={() => props.setState("start")}
      >
        <Text style={styles.btnStartTxt}>START</Text>
      </TouchableOpacity>
      {/* End of component Start Button */}
    </View>
  );
};

export default Buttons;
