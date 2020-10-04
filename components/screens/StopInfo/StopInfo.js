import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import StopInfoView from "./StopInfoView";
import { Alert } from "react-native";

const StopInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [stopName, setStopName] = useState("");
  const [stopRoutes, setStopRoutes] = useState([]);
  const { stopId } = route.params;

  useEffect(() => {
    setIsLoading(true);

    firebase
      .database()
      .ref("stops")
      .child(stopId)
      .once("value")
      .then((snapshot) => {
        if (snapshot !== null) {
          const name = snapshot.val() && snapshot.val().name;
          const routes = snapshot.val() && snapshot.val().routes;

          if (name && routes) {
            setStopName(name);
            setStopRoutes(Object.entries(routes));
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
  }, [stopId]);

  const routePressHandler = (routeId) => {
    navigation.navigate("RouteInfo", {
      stopId,
      stopName,
      routeId,
    });
  };

  return (
    <StopInfoView
      isLoading={isLoading}
      stopName={stopName}
      stopRoutes={stopRoutes}
      routePressHandler={routePressHandler}
    />
  );
};

export default StopInfo;
