import React, { useState, useEffect } from "react";
import Step1Ulis from "./Step1";
import Step2Ulis from "./Step2";
import Step3Ulis from "./Step3";
import Step4Ulis from "./Step4";

const CircleColors = ["0", "#74daee", "#f98704", "#b85eff", "#14c4a6"];
const stepTitleColors = ["0", "74daee", "#f98704", "#d190f6", "#14c4a6"];

const Step = () => {

  const [StepOrder, setStepOrder] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  },[5]);

  const handleScroll = (e) => {
    setStepOrder(3)
  };

  return (
    <svg
      style={{
        display: "block",
        margin: "auto",
        width: "80%",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1227.2 534.13"
    >
      <defs>
        <clipPath id="clip-path">
          <path fill="none" d="M0 0H583.46V534.13H0z"></path>
        </clipPath>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="step_2:_find_and_upload" data-name="step 2: find and upload">
            {StepOrder === 1 && <Step1Ulis />}
            {StepOrder === 2 && <Step2Ulis />}
            {StepOrder === 3 && <Step3Ulis />}
            {StepOrder === 4 && <Step4Ulis />}

            <g id="stepCircle">
              <path
                id="circle"
                fill="#f98704"
                d="M584.6 168.94A68.07 68.07 0 11516.17 237a68.26 68.26 0 0168.43-68.06z"
              ></path>
              <text
                id="_2"
                fill="#fff"
                data-name="2"
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontSize="62.54"
                fontWeight="700"
                transform="translate(566.61 262.4)"
                style={{ isolation: "isolate" }}
              >
                2
              </text>
            </g>
            <g
              id="stepText"
              style={{ isolation: "isolate" }}
              fill="#707070"
              fontFamily="SegoeUI, Segoe UI"
              fontSize="27.23"
            >
              <text
                transform="translate(606.94 367.84)"
                style={{ isolation: "isolate" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </text>
              <text
                transform="translate(606.94 403.9)"
                style={{ isolation: "isolate" }}
              >
                elit,sed do eiusmod tempor incididunt ut labore et
              </text>
              <text
                transform="translate(606.94 439.95)"
                style={{ isolation: "isolate" }}
              >
                dolore magna aliqua. Ut enim ad minim veniam,
              </text>
              <text
                transform="translate(606.94 476.01)"
                style={{ isolation: "isolate" }}
              >
                exercitation ullamco laboris nisi ut aliquip ex ea
              </text>
              <text
                transform="translate(606.94 512.07)"
                style={{ isolation: "isolate" }}
              >
                consequat. Duis aute irure dolor in
              </text>
            </g>
            <text
              id="stepTitle"
              fill="#f98704"
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontSize="36.79"
              fontWeight="700"
              transform="translate(685.06 256.09)"
              style={{ isolation: "isolate" }}
            >
              USE WRI
              <tspan x="149.61" y="0" letterSpacing="-.01em">
                Q
              </tspan>
              <tspan x="177.15" y="0" letterSpacing="-.07em">
                A
              </tspan>
              <tspan x="200.45" y="0">
                TI&apos;S S
              </tspan>
              <tspan x="295.84" y="0" letterSpacing=".01em">
                E
              </tspan>
              <tspan x="315.94" y="0">
                A
              </tspan>
              <tspan x="341.81" y="0" letterSpacing="-.01em">
                R
              </tspan>
              <tspan x="365.47" y="0">
                CH
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Step;
