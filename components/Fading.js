import React, { useState } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Fading = (props) => {
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  //Simple animation to follow the timer countdown
  Animated.loop(
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.1,
        duration: props.seconds,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <View>
      <Animated.View style={{ opacity: opacity }}>
        <Entypo name="stopwatch" size={100} color="black" />
      </Animated.View>
    </View>
  );
};
export default Fading;
