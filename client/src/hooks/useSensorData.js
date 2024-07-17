import { useContext } from "react";
import SensorDataContext from "../context/SensorDataContextProvider";

const useSensorData = () => {
  return useContext(SensorDataContext);
};

export default useSensorData;
