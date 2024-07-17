import { createContext, useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../components/config/firebase";

const SensorDataContext = createContext();

export const SensorDataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [co, setCo] = useState([]);
  // let tick = 0;

  const fetchData = async (bool) => {
    const db = getDatabase(app);
    const dbref = ref(db, "data");
    const snapshot = await get(dbref);
    // tick = tick + 30;

    if (snapshot.exists()) {
      const data = Object.values(snapshot.val());
      let maxValue,
        currentSensorData,
        previousData = [];
      const pdate = new Date().getTime();
      const phsdate = new Date(pdate - 24 * 60 * 60 * 1000).getTime();

      // eslint-disable-next-line
      data.map((item, key, { length }) => {
        const cdate = new Date(item.timestamp).getTime();
        const sdate = new Date(maxValue || "2024-06-01T14:35:55.104811").getTime();

        if (cdate > sdate) {
          maxValue = item.timestamp;
          currentSensorData = item;
        }
        if (!!bool && cdate < pdate && cdate > phsdate && key !== length - 1) {
          const time = `${new Date(item.timestamp).getHours().toString().padStart(2, "0")}:${new Date(item.timestamp)
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
          if (
            item.sensor_data.tvoc !== -1 &&
            item.sensor_data.tvoc !== 1156 &&
            item.sensor_data.pm2 !== -1 &&
            item.sensor_data.pm2 !== 1050 &&
            item.sensor_data.pm10 !== -1 &&
            item.sensor_data.pm10 !== 1903
          ) {
            // console.log("time", time);
            previousData.push({
              time,
              co2: item?.sensor_data.co2,
              temperature: item?.sensor_data.temperature,
              humidity: item?.sensor_data.humidity,
              tvoc: item?.sensor_data.tvoc,
              pm2: item?.sensor_data.pm2,
              pm10: item?.sensor_data.pm10,
            });
            // tick = tick + 30;
          }
        }
      });
      console.log("previousData", previousData);
      setData(currentSensorData);
      if (
        currentSensorData.sensor_data.tvoc !== -1 &&
        currentSensorData.sensor_data.tvoc !== 1156 &&
        currentSensorData.sensor_data.pm2 !== -1 &&
        currentSensorData.sensor_data.pm2 !== 1050 &&
        currentSensorData.sensor_data.pm10 !== -1 &&
        currentSensorData.sensor_data.pm10 !== 1903
      ) {
        setCo((currentData) => [
          ...previousData,
          ...currentData,
          {
            time: `${new Date(currentSensorData?.timestamp).getHours().toString().padStart(2, "0")}:${new Date(
              currentSensorData?.timestamp
            )
              .getMinutes()
              .toString()
              .padStart(2, "0")}`,
            co2: currentSensorData?.sensor_data.co2,
            temperature: currentSensorData?.sensor_data.temperature,
            humidity: currentSensorData?.sensor_data.humidity,
            tvoc: currentSensorData?.sensor_data.tvoc,
            pm2: currentSensorData?.sensor_data.pm2,
            pm10: currentSensorData?.sensor_data.pm10,
          },
        ]);
      }
    }
  };

  useEffect(() => {
    fetchData(true);
    setInterval(() => {
      fetchData(false);
    }, 30000);
    // eslint-disable-next-line
  }, []);

  return <SensorDataContext.Provider value={{ data, co }}>{children}</SensorDataContext.Provider>;
};

export default SensorDataContext;
