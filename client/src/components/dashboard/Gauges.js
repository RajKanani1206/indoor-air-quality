import React from "react";
import Arched from "./Arched";

const Gauges = ({
  text0,
  text1,
  value0,
  value1,
  SVALUE0,
  SVALUE1,
  EVALUE0,
  EVALUE1,
  LLIMIT0,
  ULIMIT0,
  LLIMIT1,
  ULIMIT1,
}) => {
  return (
    <div className="px-14">
      <div className="text-center mt-8">
        <Arched
          START_ANGLE={90}
          END_ANGLE={270}
          value={value0}
          SVALUE={SVALUE0}
          EVALUE={EVALUE0}
          LLIMIT={LLIMIT0}
          ULIMIT={ULIMIT0}
        />
        <div className="mt-2.5 text-4xl font-bold">{value0}</div>
        <div>{text0}</div>
      </div>
      <div className="text-center mt-14">
        <Arched
          START_ANGLE={90}
          END_ANGLE={270}
          value={value1}
          SVALUE={SVALUE1}
          EVALUE={EVALUE1}
          LLIMIT={LLIMIT1}
          ULIMIT={ULIMIT1}
        />
        <div className="mt-2.5 text-4xl font-bold">{value1}</div>
        <div>{text1}</div>
      </div>
    </div>
  );
};

export default Gauges;
