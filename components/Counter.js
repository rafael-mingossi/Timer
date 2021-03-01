import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import styles from "./styles";

const Counter = (props) => {
  var done = false;

  useEffect(() => {
    //setInterval func is being applied with the counter logic
    const timer = setInterval(() => {
      props.setSeconds(props.seconds - 1);

      if (props.seconds <= 0) {
        if (props.minutes > 0) {
          props.setMinutes(props.minutes - 1);
          props.setSeconds(59);
        } else {
          if (!done) {
            done = true;
            props.setState("select");
            props.setMinutes(0);
            props.setSeconds(0);
            playSound();
          }
        }
      }
    }, 1000);

    //clear the timer everytime
    return () => clearInterval(timer);
  });

  //using async because it will run in the background while the app is being used
  async function playSound() {
    const sound = new Audio.Sound();
    try {
      var alarm;
      props.alarmSound.map(function (val) {
        if (val.selected) {
          alarm = val.file;
        }
      });
      await sound.loadAsync(alarm);
      await sound.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      //await sound.unloadAsync(alarm);
    } catch (error) {
      // An error occurred!
    }
  }

  //this function will be used within the reset button in case the user wants to stop the timer earlier
  function reset() {
    props.setState("select");
    props.setMinutes(0);
    props.setSeconds(0);
  }

  //func to add a zero to the counter when it gets less than 10
  function formatNumber(number) {
    var finalNumber = "";
    if (number < 10) {
      finalNumber = "0" + number;
    } else {
      finalNumber = number;
    }
    return finalNumber;
  }

  var seconds = formatNumber(props.seconds);
  var minutes = formatNumber(props.minutes);

  return (
    <View style={styles.mainView}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />

      <StatusBar style="auto" />

      <View style={styles.viewTimerCounter}>
        <Text style={styles.txtTimerCounter}>{minutes} : </Text>
        <Text style={styles.txtTimerCounter}>{seconds}</Text>
      </View>

      <TouchableOpacity style={styles.btnStart} onPress={() => reset()}>
        <Text style={styles.btnStartTxt}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
