import React from "react";
import { useGauge } from "use-gauge";

const Arched = ({ START_ANGLE, END_ANGLE, value, SVALUE, EVALUE, LLIMIT, ULIMIT }) => {
  const gauge = useGauge({
    domain: [SVALUE || 0, EVALUE || 100],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    diameter: 180,
  });

  const needle = gauge.getNeedleProps({
    value,
    baseRadius: 12,
    tipRadius: 2,
  });

  const tempColor = value > 22 && value < 26 ? "#facc15" : value > 18 && value <= 22 ? "#4ade80" : "#f87171";
  const humColor = value < 20 || value > 60 ? "#f87171" : value > 30 && value < 50 ? "#4ade80" : "#facc15";

  const color =
    LLIMIT === 111
      ? tempColor
      : LLIMIT === 333
      ? humColor
      : value < LLIMIT
      ? "#4ade80"
      : value > ULIMIT
      ? "#f87171"
      : "#facc15";

  return (
    <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
      <g id="arcs">
        <path
          {...gauge.getArcProps({
            offset: 30,
            startAngle: START_ANGLE,
            endAngle: END_ANGLE,
          })}
          fill="none"
          className="stroke-gray-200"
          strokeLinecap="round"
          strokeWidth={40}
        />
        <path
          {...gauge.getArcProps({
            offset: 30,
            startAngle: START_ANGLE,
            endAngle: gauge.valueToAngle(value),
          })}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={40}
        />
      </g>
      <g id="needle">
        <circle className="fill-gray-300" {...needle.base} r={20} />
        <circle className="fill-gray-700" {...needle.base} />
        <circle className="fill-gray-700" {...needle.tip} />
        <polyline className="fill-gray-700" points={needle.points} />
        <circle className="fill-white" {...needle.base} r={4} />
      </g>
    </svg>
  );
};

export default Arched;
