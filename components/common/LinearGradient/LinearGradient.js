import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
// import { LinearGradient } from "expo-linear-gradient";

// const LGradient = ({ style: _style, children }) => (
//   <LinearGradient
//     // colors={["#7159C1", "#9B49C1"]}
//     colors={["#8D1053", "#004074"]}
//     start={[0, 0]}
//     end={[1, 1]}
//     style={[styles.container, _style]}
//   >
//     {children}
//   </LinearGradient>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

const LGradient = ({ style: _style, children }) => (
  <ImageBackground
    source={require("../../../assets/bus.png")}
    style={[styles.container, _style]}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: Math.ceil(getStatusBarHeight()),
  },
});

export default LGradient;
