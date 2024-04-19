import React from "react";
import { Tooltip } from "react-tooltip";

function ToolTip({ arr }) {
  return (
    <>
      {arr &&
        arr?.map((el, i) => (
          <Tooltip
            key={i}
            id={`my-tooltip${i}`}
            place="top"
            distance={10}
            style={{
              padding: "6px",
            }}
          />
        ))}
    </>
  );
}

export default ToolTip;
