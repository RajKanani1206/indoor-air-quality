import React, { useEffect, useState } from "react";
import { LineChart, XAxis, YAxis, Line, Tooltip, Label } from "recharts";
import Modal from "react-bootstrap/Modal";
import useSensorData from "../../hooks/useSensorData";
import "./style.css";

const Graphs = () => {
  const { co, data } = useSensorData();
  const [aShow, setAShow] = useState(false);
  const [bShow, setBShow] = useState(false);
  const [cShow, setCShow] = useState(false);

  useEffect(() => {
    if (data?.sensor_data.pm2 === -1 || data?.sensor_data.pm10 === -1) {
      setAShow(true);
    } else {
      setAShow(false);
    }

    if (data?.sensor_data.tvoc === -1) {
      setBShow(true);
    } else {
      setBShow(false);
    }

    if (data?.sensor_data.pm2 === 1050 || data?.sensor_data.pm10 === 1903 || data?.sensor_data.tvoc === 1156) {
      setCShow(true);
    } else {
      setCShow(false);
    }

    // eslint-disable-next-line
  }, [data?.timestamp]);
  return (
    <>
      <div className="mx-[20px] my-10 py-[20px] px-[20px] rounded-2xl overflow-y-scroll overflow-x-hidden text-[#111827] graph-main">
        <div className="text-3xl font-bold">Sensor Details - Trends</div>
        <div className="flex justify-between mt-8">
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                Temperature (°C)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="temperature" stroke="#1695d0" />
          </LineChart>
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                Humidity (%)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="humidity" stroke="#1695d0" />
          </LineChart>
        </div>
        <div className="flex justify-between mt-8">
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                CO2 (ppm)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="co2" stroke="#1695d0" />
          </LineChart>
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                TVOCS (ppb)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="tvoc" stroke="#1695d0" />
          </LineChart>
        </div>
        <div className="flex justify-between mt-8">
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                PM 2.5 (µg/m3)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="pm2" stroke="#1695d0" />
          </LineChart>
          <LineChart width={500} height={300} data={co} margin={{ left: 20, top: 10, right: 10, bottom: 20 }}>
            <XAxis dataKey="time">
              <Label position="bottom" style={{ textAnchor: "middle" }}>
                Time (24-Hour Format)
              </Label>
            </XAxis>
            <YAxis>
              <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                PM 10 (µg/m3)
              </Label>
            </YAxis>
            <Tooltip />
            <Line dot={false} type="monotone" dataKey="pm10" stroke="#1695d0" />
          </LineChart>
        </div>
      </div>
      <Modal show={aShow} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Alert !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>SPS30 sensor not connected/working</Modal.Body>
        <Modal.Footer>Please Contact - IAQ@outlook.com</Modal.Footer>
      </Modal>
      <Modal show={bShow} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Alert !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>CCS811 sensor not connected/working</Modal.Body>
        <Modal.Footer>Please Contact - IAQ@outlook.com</Modal.Footer>
      </Modal>
      <Modal show={cShow} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Alert !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Abnormal readings detected from one of the sensors</Modal.Body>
        <Modal.Footer>Please Contact - IAQ@outlook.com</Modal.Footer>
      </Modal>
    </>
  );
};

export default Graphs;
