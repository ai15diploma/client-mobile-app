import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import QRScannerView from "./QRScannerView";
import { Alert } from "react-native";

const QRScanner = () => {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);

  const barCodeScannedHandler = ({ data }) => {
    setScanned(true);
    const value = parseInt(data, 10);
    if (value >= 0 && value <= 515) {
      navigation.navigate("StopInfo", { stopId: value });
    } else {
      /** использовать вместо переменной scanned переменную isModalShown
       * и показывать новое окно в случае, если она равна false,
       * также необходим обработчик на закрытие этого окна */
      Alert.alert("Ошибка", "Неверный QR-код.");
    }
  };

  const resetButtonPressHandler = () => {
    setScanned(false);
  };

  return (
    <QRScannerView
      scanned={scanned}
      barCodeScannedHandler={barCodeScannedHandler}
      resetButtonPressHandler={resetButtonPressHandler}
    />
  );
};

export default QRScanner;
