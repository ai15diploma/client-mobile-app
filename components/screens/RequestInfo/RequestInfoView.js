import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import LinearGradient from "../../common/LinearGradient";

const RequestInfoView = ({
  routeName,
  routeNumber,
  firstStopName,
  secondStopName,
}) => (
  <LinearGradient style={styles.container}>
    <View style={styles.header}>
      <Text style={[styles.text, { textAlign: "center" }]}>
        Проверьте правильность выбранных данных
      </Text>
    </View>
    <View style={styles.main}>
      <View style={styles.row}>
        <Image source={require("../../../assets/ic_explore.png")} />
        <Text style={[styles.text, { fontSize: 16 }]}>
          {" Отправление из: "}
        </Text>
      </View>
      <Text style={[styles.text, {paddingLeft: 32}]}>{firstStopName}</Text>
      <View style={styles.row}>
        <Image source={require("../../../assets/ic_gps.png")} />
        <Text style={[styles.text, { fontSize: 16 }]}>
          {" Путь назначения: "}
        </Text>
      </View>
      <Text style={[styles.text, {paddingLeft: 32}]}>{secondStopName}</Text>
      <View style={styles.row}>
        <Image source={require("../../../assets/ic_location.png")} />
        <Text style={[styles.text, { fontSize: 16 }]}>{" Маршрут (номер): "}</Text>
      </View>
      <Text style={[styles.text, {paddingLeft: 32}]}>{`${routeName} (${routeNumber})`}</Text>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{"Отправить заявку"}</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    borderColor: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  header: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: "15%",
    paddingBottom: 15,
  },
  main: {
    flex: 2,
    justifyContent: "flex-start",
    padding: 15,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
});

export default RequestInfoView;
