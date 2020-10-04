import React from "react";
import { useRoute } from "@react-navigation/native";
import RequestInfoView from "./RequestInfoView";

const RequestInfo = () => {
  const route = useRoute();
  const {
    routeId,
    routeName,
    routeNumber,
    firstStopId,
    firstStopName,
    secondStopId,
    secondStopName,
  } = route.params;

  return (
    <RequestInfoView
      routeName={routeName}
      routeNumber={routeNumber}
      firstStopName={firstStopName}
      secondStopName={secondStopName}
    />
  );
};

export default RequestInfo;
