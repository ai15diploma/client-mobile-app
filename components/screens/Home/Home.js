import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Permissions from "expo-permissions";
import HomeView from "./HomeView";

const Home = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.getAsync(Permissions.CAMERA);
      setHasPermission(status === "granted");
    })();
  }, []);

  const buttonPressHandler = () => {
    if (hasPermission) {
      navigation.navigate("QRScanner");
    } else {
      (async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        /* new version */
        if (status === "granted") {
          setHasPermission(true);
          navigation.navigate("QRScanner");
        }
        /** */
      })();
    }
  };

  return <HomeView buttonPressHandler={buttonPressHandler} />;
};

export default Home;
