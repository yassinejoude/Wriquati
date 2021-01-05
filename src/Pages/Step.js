import React, { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Step1Ulis from "./Step1";
import Step2Ulis from "./Step2";
import Step3Ulis from "./Step3";
import Step4Ulis from "./Step4";

const circleColors = ["0", "#74daee", "#f98704", "#b85eff", "#14c4a6"];
const stepTitleColors = ["0", "#74daee", "#f98704", "#d190f6", "#14c4a6"];
const stepTitles = [
  "0",
  "STEP 1 TITLE",
  "STEP 2 TITLE",
  "STEP 3 TITLE",
  "STEP 4 TITLE",
];

const Step = () => {
  const [stepSpec, setStepSpec] = useState({
    stepOrder: 1,
    stepCircleColor: circleColors[1],
    stepTitle: stepTitles[1],
    stepTitleColor: stepTitleColors[1],
  });

  //   const handleScroll = (e) => {
  //     setStepOrder(3);
  //   };
  const updateStep = (order) => {
    setStepSpec({
      stepOrder: order,
      stepCircleColor: circleColors[order],
      stepTitle: stepTitles[order],
      stepTitleColor: stepTitleColors[order],
    });
  };
  const prevOrder = () => {
    if (stepSpec.stepOrder > 1 && stepSpec.stepOrder <= 4) {
      updateStep(stepSpec.stepOrder - 1);
    }
  };
  const nextOrder = () => {
    if (stepSpec.stepOrder >= 1 && stepSpec.stepOrder < 4) {
      updateStep(stepSpec.stepOrder + 1);
    }
  };

  return (
    <ReactScrollWheelHandler
      upHandler={prevOrder}
      downHandler={nextOrder}
      wheelconfig={[1, 500, 0.05]}
      style={{
        width: "100%",
        height: "80vh",
        outline: "none",
      }}
    >
      <svg
        style={{
          display: "block",
          margin: "auto",
          width: "80%",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1256.82 621.1"
      >
        <defs>
          <clipPath id="clip-path">
            <path fill="none" d="M0 0H583.46V534.13H0z"></path>
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="step_2:_find_and_upload" data-name="step 2: find and upload">
              {stepSpec.stepOrder === 1 && <Step1Ulis />}
              {stepSpec.stepOrder === 2 && <Step2Ulis />}
              {stepSpec.stepOrder === 3 && <Step3Ulis />}
              {stepSpec.stepOrder === 4 && <Step4Ulis />}

              <g id="stepCircle">
                <path
                  id="circle"
                  fill={stepSpec.stepCircleColor}
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
                  {stepSpec.stepOrder}
                </text>
                <text
                  id="stepText"
                  fill="#707070"
                  fontFamily="MyriadPro-Regular, Myriad Pro"
                  fontSize="32"
                  transform="translate(620.37 350.4)"
                >
                  HI just a question on es lint. what is the \n standard way of
                  setting it up? just install the package from atom or setting
                  up es lint locally for each and every project.
                </text>
              </g>
              <text
                id="stepTitle"
                fill={stepSpec.stepTitleColor}
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontSize="36.79"
                fontWeight="700"
                transform="translate(685.06 256.09)"
                style={{ isolation: "isolate" }}
              >
                {stepSpec.stepTitle}
              </text>
            </g>
          </g>
        </g>
      </svg>
    </ReactScrollWheelHandler>
  );
};

export default Step;
