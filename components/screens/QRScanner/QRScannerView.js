import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const { width } = Dimensions.get("window");
const qrSize = width * 0.15;

const QRScannerView = ({
  scanned,
  barCodeScannedHandler,
  resetButtonPressHandler,
}) => (
  <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? null : barCodeScannedHandler}
      style={[StyleSheet.absoluteFill, styles.barCodeScanner]}
    >
      <Text style={styles.description}>Наведите камеру на QR-код</Text>
      <Image style={styles.qr} source={require("../../../assets/cross.png")} />
      <View style={styles.footer}>
        {scanned ? (
          <TouchableOpacity
            onPress={resetButtonPressHandler}
            style={styles.reset}
          >
            <Text style={styles.text}> Сканировать ещё раз</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.text}></Text>
        )}
      </View>
    </BarCodeScanner>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#000",
  },
  barCodeScanner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    fontSize: 18,
    width: "100%",
    paddingTop: "20%",
    paddingBottom: "5%",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#000",
  },
  qr: {
    width: qrSize,
    height: qrSize,
  },
  footer: {
    paddingBottom: "10%",
  },
  reset: {
    textAlign: "center",
    backgroundColor: "#000",
    padding: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    borderColor: "#FFF",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
  },
});

export default QRScannerView;
