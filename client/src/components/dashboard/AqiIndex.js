import React from "react";
import Arched from "./Arched";

const AqiIndex = ({ aqiValue }) => {
  const statusText = aqiValue < 51 ? "Good" : aqiValue > 100 ? "Bad" : "Moderate";
  return (
    <div className="text-center mx-6">
      <div className="font-semibold">AQI index</div>
      <div className="text-5xl font-mono font-extrabold">{aqiValue}</div>
      <div className="font-semibold">{statusText}</div>
      <div className="p-10">
        <Arched START_ANGLE={0} END_ANGLE={360} value={aqiValue} SVALUE={0} EVALUE={150} LLIMIT={51} ULIMIT={100} />
      </div>
    </div>
  );
};

export default AqiIndex;
