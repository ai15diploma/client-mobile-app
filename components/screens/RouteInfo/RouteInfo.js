import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import RouteInfoView from "./RouteInfoView";
import { Alert } from "react-native";

const RouteInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [routeNumber, setRouteNumber] = useState("");
  const [routeName, setRouteName] = useState("");
  const [stops, setStops] = useState([]);
  const {
    stopId: firstStopId,
    stopName: firstStopName,
    routeId,
  } = route.params;

  useEffect(() => {
    setIsLoading(true);

    firebase
      .database()
      .ref("routes")
      .child(routeId)
      .once("value")
      .then((snapshot) => {
        if (snapshot !== null) {
          const number = snapshot.val() && snapshot.val().number;
          const name = snapshot.val() && snapshot.val().name;
          const stops = snapshot.val() && snapshot.val().stops;

          if (number && name && stops) {
            setRouteNumber(number);
            setRouteName(name);
            setStops(Object.values(stops));
          } else {
            throw new Error("Value error");
          }
        } else {
          throw new Error("Snapshot error");
        }
      })
      .catch(() => {
        Alert.alert("Ошибка", "Не удалось получить данные.");
        navigation.goBack();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [routeId]);

  const stopPressHandler = ({ id: secondStopId, name: secondStopName }) => {
    navigation.navigate("RequestInfo", {
      routeId,
      routeName,
      routeNumber,
      firstStopId,
      firstStopName,
      secondStopId,
      secondStopName,
    });
  };

  return (
    <RouteInfoView
      isLoading={isLoading}
      routeName={routeName}
      routeNumber={routeNumber}
      stops={stops}
      stopPressHandler={stopPressHandler}
    />
  );
};

export default RouteInfo;
