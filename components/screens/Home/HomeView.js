import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "../../common/LinearGradient";

const HomeView = ({ buttonPressHandler }) => (
  <LinearGradient>
    <View style={styles.header}>
      <Text
        style={[
          styles.text,
          { fontSize: 26, fontWeight: "bold", textAlign: "center" },
        ]}
      >
        F.A.Q.
      </Text>
      <Text style={[styles.text, { fontSize: 21, textAlign: "center" }]}>
        Инструкция по использованию
      </Text>
    </View>
    <View style={styles.main}>
      <Text style={styles.text}>
        1. Нажмите кнопку "Сканировать QR-код" для запуска сканера.
      </Text>
      <Text style={styles.text}>
        2. На каждой из остановок висят QR-коды, выглядят они следующим образом:
      </Text>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/qr.png")} />
      </View>
      <Text style={styles.text}>3. Наведите камерой устройства на QR-код.</Text>
      <Text style={styles.text}>4. Выберите необходимый маршрут.</Text>
      <Text style={styles.text}>5. Выберите конечную остановку.</Text>
      <Text style={styles.text}>
        5. Проверьте выбранные Вами данные, после чего нажмите кнопку "Отправить
        запрос".
      </Text>
      <Text style={styles.text}>6. Поздравляем! Заявка оформлена.</Text>
      <Text style={styles.text}>Ожидайте прибытия Вашего транспорта.</Text>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity onPress={buttonPressHandler} style={styles.button}>
        <Text style={styles.text}>Сканировать QR-код</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(255, 0, 0, 0.65)",
  },
  main: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  text: {
    color: "#FFF",
    fontSize: 19,
  },
  footer: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    borderColor: "#FFF",
  },
});

export default HomeView;
