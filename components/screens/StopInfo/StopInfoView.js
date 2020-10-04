import React from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import LinearGradient from "../../common/LinearGradient";

const StopInfoView = ({
  isLoading,
  stopName,
  stopRoutes,
  routePressHandler,
}) => (
  <LinearGradient>
    {isLoading ? (
      <Spinner visible={true} />
    ) : (
      <>
        <View style={[styles.item, { alignItems: "center" }]}>
          <Text style={styles.text}>Текущая остановка </Text>
          <Text style={[styles.text, { fontSize: 19, fontStyle: "italic" }]}>
            {stopName}
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Маршруты</Text>
        </View>
        <FlatList
          keyExtractor={([id]) => id}
          data={stopRoutes}
          renderItem={({ item: [id, { name, number }] }) => {
            const [from, to] = name.split("-").map((x) => x.trim());
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => routePressHandler(id)}
              >
                {/**
                 * DRY failed
                 */}
                <View style={styles.row}>
                  <Image source={require("../../../assets/ic_explore.png")} />
                  <Text style={[styles.text, { fontSize: 16 }]}>
                    {" Номер Маршрута: "}
                  </Text>
                  <Text style={styles.text}>{number}</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../../assets/ic_gps.png")} />
                  <Text style={[styles.text, { fontSize: 16 }]}>
                    {" Откуда: "}
                  </Text>
                  <Text style={styles.text}>{from}</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../../assets/ic_location.png")} />
                  <Text style={[styles.text, { fontSize: 16 }]}>
                    {" Куда: "}
                  </Text>
                  <Text style={styles.text}>{to}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </>
    )}
  </LinearGradient>
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    borderColor: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  line: {
    alignItems: "center",
    borderTopWidth: 5,
    borderStyle: "solid",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "#FFF",
    padding: 5,
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StopInfoView;
