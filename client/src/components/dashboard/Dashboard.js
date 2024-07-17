import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import "./style.css";
import AqiIndex from "./AqiIndex";
import Gauges from "./Gauges";
import useSensorData from "../../hooks/useSensorData";

const Dashboard = () => {
  const { data } = useSensorData();
  const [aShow, setAShow] = useState(false);
  const [bShow, setBShow] = useState(false);
  const [cShow, setCShow] = useState(false);

  useEffect(() => {
    if (data?.sensor_data.pm2 === -1 || data?.sensor_data.pm10 === -1) {
      setAShow(true);
      emailjs
        .send(
          "service_khygqxj",
          "template_q6jy89o",
          {
            sensor: "SPS30",
          },
          {
            publicKey: "F3no3zoVoTj2cLhVe",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setAShow(false);
    }

    if (data?.sensor_data.tvoc === -1) {
      setBShow(true);
      emailjs
        .send(
          "service_khygqxj",
          "template_q6jy89o",
          {
            sensor: "CCS811",
          },
          {
            publicKey: "F3no3zoVoTj2cLhVe",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setBShow(false);
    }

    if (data?.sensor_data.pm2 > 55.4 || data?.sensor_data.pm10 > 254 || data?.sensor_data.tvoc > 2200) {
      setCShow(true);
      emailjs
        .send(
          "service_khygqxj",
          "template_4dar5vg",
          {},
          {
            publicKey: "F3no3zoVoTj2cLhVe",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setCShow(false);
    }

    // eslint-disable-next-line
  }, [data?.timestamp]);

  return (
    <>
      <div className="mx-[20px] my-10 py-[20px] ps-[20px] rounded-2xl text-[#111827] dash-main">
        <div className="text-3xl font-bold">Sensor Details - Overview</div>
        <div className="flex justify-between mt-8">
          <AqiIndex aqiValue={Math.round(data?.sensor_data.iaqi)} />
          <div className="grid grid-cols-3 mx-6">
            <Gauges
              text0={"Temperature(°C)"}
              text1={"CO2(ppm)"}
              value0={data?.sensor_data.temperature}
              value1={data?.sensor_data.co2}
              SVALUE0={0}
              EVALUE0={100}
              SVALUE1={0}
              EVALUE1={5000}
              LLIMIT0={111}
              ULIMIT0={0}
              LLIMIT1={1000}
              ULIMIT1={2000}
            />
            <Gauges
              text0={"Humidity(%)"}
              text1={"PM 2.5(µg/m3)"}
              value0={data?.sensor_data.humidity}
              value1={data?.sensor_data.pm2}
              SVALUE0={0}
              EVALUE0={100}
              SVALUE1={0}
              EVALUE1={55.4}
              LLIMIT0={333}
              ULIMIT0={0}
              LLIMIT1={12}
              ULIMIT1={35.4}
            />
            <Gauges
              text0={"TVOCS(ppb)"}
              text1={"PM 10(µg/m3)"}
              value0={data?.sensor_data.tvoc}
              value1={data?.sensor_data.pm10}
              SVALUE0={0}
              EVALUE0={2200}
              SVALUE1={0}
              EVALUE1={254}
              LLIMIT0={220}
              ULIMIT0={660}
              LLIMIT1={55}
              ULIMIT1={154}
            />
          </div>
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

export default Dashboard;
