import React from "react";
import { motion } from "framer-motion";
const variants = {
    move: { rotateZ: -200},
    stable:{rotate:0}
  
  };
export default function Clouds(props) {
  return (
    <React.Fragment>
      <svg
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          zIndex:'-1'
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="1919.107"
        height="480.55"
        viewBox="0 0 1919.107 673.55"
      >
        <g data-name="big cloud" transform="translate(0 26.24)">
          <path
            fill="rgba(116,218,238,0.75)"
            d="M590.518 951.365V516.3s74.035-143.974 134.289-152.83C904.259 337.092 928.238 576.2 948.275 536.8c72.863-143.279 402.849-34.408 465.176 23.735 26.546 24.764 103.081 3.052 168.221-142.739 88.834-198.819 441.9-134.133 385.754 171.756-10.107 55.066 116.881-277.382 275.893-112.289s266.306-113.01 266.306-113.01l-2.183 583.474z"
            data-name="big cloud"
            transform="translate(-590.518 -304.056)"
          ></path>
        </g>
        <path
          fill="#ef923f"
          d="M1.227 2.455A1.227 1.227 0 010 1.229z"
          data-name="Path 427"
          transform="translate(576.272 668.054)"
        ></path>
        <ellipse
          cx="108.906"
          cy="78.413"
          fill="#74daee"
          data-name="Ellipse 1"
          rx="108.906"
          ry="78.413"
          transform="rotate(-41.67 550.197 -873.946)"
        ></ellipse>
        <ellipse
          cx="24.223"
          cy="33.643"
          fill="#74daee"
          data-name="Ellipse 2"
          rx="24.223"
          ry="33.643"
          transform="rotate(-41.67 523.49 -801.711)"
        ></ellipse>
        <path
          fill="rgba(116,218,238,0.78)"
          d="M3214.627 495.1c-4.093-18.125 3.169-35.206 16.219-38.152s26.946 9.357 31.039 27.482-3.169 35.206-16.219 38.152-26.946-9.356-31.039-27.482z"
          data-name="Path 2"
          transform="translate(-1810.992 -308.398)"
        ></path>
      </svg>
    </React.Fragment>
  );
}
