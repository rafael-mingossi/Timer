import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./components/styles";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [state, setState] = useState("select");

  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: false,
      sound: "Alarm 1",
      file: require("./assets/alarm1.mp3"),
    },
    {
      id: 2,
      selected: false,
      sound: "Alarm 2",
      file: require("./assets/alarm2.mp3"),
    },
  ]);

  if (state == "select") {
    return (
      <View style={styles.mainView}>
        {/* Background Linear Gradient */}
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />

        <StatusBar style="auto" />

        <Timer
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          minutes={minutes}
          seconds={seconds}
        />

        <Buttons
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          minutes={minutes}
          seconds={seconds}
          alarmSound={alarmSound}
          setAlarmSound={setAlarmSound}
          setState={setState}
        />
      </View>
    );
  } else if (state == "start") {
    return (
      <Counter
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        minutes={minutes}
        seconds={seconds}
        setState={setState}
        alarmSound={alarmSound}
        setAlarmSound={setAlarmSound}
      />
    );
  }
};

export default App;
