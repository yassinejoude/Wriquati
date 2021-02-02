import React, { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import './Step.css'

import Step1Ulis from "../components/Step1";
import Step2Ulis from "../components/Step2";
import Step3Ulis from "../components/Step3";
import Step4Ulis from "../components/Step4";

const useStyles = makeStyles(() => ({
  clickable: {
    cursor: "pointer",
  },

}));

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
  const classes = useStyles();
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
      wheelconfig={[0, 2000, 0.05]}
      style={{
        width: "100%",
        height: "75vh",
        outline: "none",
        position:'absolute',
        bottom:'0'
      }}
    >
    

        <svg className='StepSvgBgStyles' viewBox="-15 0 1390 615">
      <g id="Layer_2" >
        <g id="Layer_1-2" >
          <g id="stepBg" >
            <path
              id="UlistrationBg"
              fill={stepSpec.stepCircleColor}
              d="M619.65 559.26H21a22.13 22.13 0 01-14.84-5.86A19.45 19.45 0 010 539.26V20C0 9 9.41 0 21 0h673.6"
              opacity="0.64"
            ></path>
            <g
              id="progressBars"
              fill="none"
              stroke="#ff7e21"
              strokeMiterlimit="10"
              strokeWidth="2"
            >
              <path
                d="M710.92 1h601.14a22.79 22.79 0 0114.42 5.18 16.51 16.51 0 016 12.49v93.44M638.05 558.52l671.5 1.2c1.52 0 9.59-.1 16.12-5.19 4.13-3.21 6.69-7.66 6.7-12.58l.11-56.44.07-37.78"
                opacity="0.68"
              ></path>
            </g>
            <g id="scrollBar">
              <g id="stepCircle">
                <path
                  id="circle"
                  fill="none"
                  stroke="#f7931e"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1332.46 122.49c9.29 0 16.82 7.13 16.82 15.93s-7.53 15.92-16.82 15.92-16.83-7.13-16.83-15.92 7.54-15.93 16.83-15.93z"
                ></path>
                <text
                  id="_2"
                  fill="#f7931e"
                  data-name="2"
                  fontFamily="SegoeUI-Bold, Segoe UI"
                  fontSize="14.63"
                  fontWeight="700"
                  transform="matrix(1.05 0 0 1 1328.04 144.35)"
                  style={{ isolation: "isolate" }}
                >
                  1
                </text>
              </g>
              <g id="stepCircle-2" data-name="stepCircle">
                <path
                  id="circle-2"
                  fill="none"
                  stroke="#f7931e"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1332.46 217.09c9.29 0 16.82 7.13 16.82 15.92s-7.53 15.93-16.82 15.93-16.83-7.13-16.83-15.93 7.54-15.92 16.83-15.92z"
                  data-name="circle"
                ></path>
                <text
                  id="_2-2"
                  fill="#f7931e"
                  data-name="2"
                  fontFamily="SegoeUI-Bold, Segoe UI"
                  fontSize="14.63"
                  fontWeight="700"
                  transform="matrix(1.05 0 0 1 1328.04 238.95)"
                  style={{ isolation: "isolate" }}
                >
                  2
                </text>
              </g>
              <g
                id="ProgressDots"
                fill="none"
                stroke="#f48f21"
                strokeMiterlimit="10"
                strokeWidth="0.7"
              >
                <ellipse cx="1332.46" cy="180.7" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="191.38" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="202.19" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="169.89" rx="3.55" ry="3.38"></ellipse>
              </g>
              <g id="stepCircle-3" data-name="stepCircle">
                <path
                  id="circle-3"
                  fill="none"
                  stroke="#f7931e"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1332.46 311.35c9.29 0 16.82 7.13 16.82 15.93s-7.53 15.92-16.82 15.92-16.83-7.13-16.83-15.92 7.54-15.93 16.83-15.93z"
                  data-name="circle"
                ></path>
                <text
                  id="_3"
                  fill="#f7931e"
                  data-name="3"
                  fontFamily="SegoeUI-Bold, Segoe UI"
                  fontSize="14.63"
                  fontWeight="700"
                  transform="matrix(1.05 0 0 1 1328.04 333.22)"
                  style={{ isolation: "isolate" }}
                >
                  3
                </text>
              </g>
              <g
                id="ProgressDots-2"
                fill="none"
                stroke="#f48f21"
                strokeMiterlimit="10"
                strokeWidth="0.7"
                data-name="ProgressDots"
              >
                <ellipse cx="1332.46" cy="274.97" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="285.65" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="296.46" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="264.16" rx="3.55" ry="3.38"></ellipse>
              </g>
              <g id="stepCircle-4" data-name="stepCircle">
                <path
                  id="circle-4"
                  fill="none"
                  stroke="#f7931e"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1332.46 406.94c9.29 0 16.82 7.13 16.82 15.93s-7.53 15.92-16.82 15.92-16.83-7.13-16.83-15.92 7.54-15.93 16.83-15.93z"
                  data-name="circle"
                ></path>
                <text
                  id="_2-3"
                  fill="#f7931e"
                  data-name="2"
                  fontFamily="SegoeUI-Bold, Segoe UI"
                  fontSize="14.63"
                  fontWeight="700"
                  transform="matrix(1.05 0 0 1 1328.04 428.81)"
                  style={{ isolation: "isolate" }}
                >
                  4
                </text>
              </g>
              <g
                id="ProgressDots-3"
              fill='none'
                stroke="#f48f21"
                strokeMiterlimit="10"
                strokeWidth="0.7"
                data-name="ProgressDots"
              >
                <ellipse cx="1332.46" cy="370.56" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="381.23" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="392.05" rx="3.55" ry="3.38"></ellipse>
                <ellipse cx="1332.46" cy="359.75" rx="3.55" ry="3.38"></ellipse>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <Grid
        style={{
          position: "absolute",
          width: "100%",
          bottom:'0px'
        
        }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          {stepSpec.stepOrder === 1 && <Step1Ulis></Step1Ulis>}
          {stepSpec.stepOrder === 2 && <Step2Ulis />}
          {stepSpec.stepOrder === 3 && <Step3Ulis />}
          {stepSpec.stepOrder === 4 && <Step4Ulis />}
        </Grid>
        <Grid item xs={6}>
        <h1
            id="stepTitle"
            style={{
              fontFamily: "MyriadPro-Regular, Myriad Pro",
              fontSize: "35px",
              color: stepSpec.stepCircleColor,
              textAlign:"center",
              marginBottom:"70px"
            }}
          >
           {stepSpec.stepTitle}
          </h1>
        </Grid>
        </Grid>
      {/* <Grid
        style={{
          position: "relative",
         
          width: "100%",
          height: "70vh",
        }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          {stepSpec.stepOrder === 1 && <Step1Ulis></Step1Ulis>}
          {stepSpec.stepOrder === 2 && <Step2Ulis />}
          {stepSpec.stepOrder === 3 && <Step3Ulis />}
          {stepSpec.stepOrder === 4 && <Step4Ulis />}
        </Grid>
        <Grid item xs={6}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="825 0 600 600"
            width="700"
            height="500"
          >
            <g id="step_2:_find_and_upload" data-name="step 2: find and upload">
              <g id="clouds" fill="#ecdeff">
                <path
                  id="cloud4"
                  d="M792.63 107.48c8.51.16 17.31.27 25.17-3 8.39-3.55 15.37-11.92 14.93-21.16s-10.43-17.44-18.86-14c-5.86 2.42-9 9.09-9.84 15.45a13.11 13.11 0 00-16.65-8.46 13.35 13.35 0 00-9 12.08 10.74 10.74 0 00-13.17-7.72 10.89 10.89 0 00-7.9 9.43c-1.87-7.43-3.94-15.21-9.13-20.77s-14.6-7.87-20.31-2.84c-6.51 5.74-4.48 16.31-1.9 24.67-2.86.44-5.79 1.28-7.93 3.25s-3.27 5.32-2 7.95 4.54 3.77 7.47 3.87c23 .77 46.1.77 69.12 1.25z"
                ></path>
                <path
                  id="cloud2"
                  d="M1179.19 179.07c16.25.31 33 .52 48-5.83 16-6.78 29.35-22.74 28.51-40.38s-19.91-33.29-36-26.65c-11.18 4.62-17.09 17.34-18.79 29.49-3.68-11.2-15.78-18.83-27.28-17.21s-21.09 12.32-21.63 24.11c-2.47-9.32-12-16.15-21.45-15.37s-17.79 9-18.77 18.65c-3.58-14.2-7.52-29-17.44-39.66s-27.87-15-38.76-5.42c-12.43 11-8.56 31.13-3.63 47.09-5.45.85-11 2.44-15.13 6.21s-6.25 10.16-3.81 15.18 8.66 7.19 14.26 7.38c43.88 1.42 87.99 1.57 131.92 2.41z"
                ></path>
                <path
                  id="cloud1"
                  d="M950.62 45.49c8.24-.09 16.56-.19 24.58-2.09 6.63-1.58 14.11-6.13 13.65-13-.35-5.18-5.67-9-10.76-8.82s-9.62 3.78-12.32 8.18C964.54 24 962 18 956.85 15.33s-13 .64-12.92 6.5c-2.82-6-5.79-12.21-10.78-16.53C926.29-.62 915.64-1.87 908 3s-11 15.91-6.77 24c-4.79-2.3-10.64-2.63-15.32-.11s-7.78 8.16-6.69 13.43c2.57 12.49 19 5.71 27.29 5.63z"
                ></path>
              </g>
              <g id="stepCircle">
                <path
                  id="circle"
                  fill={stepSpec.stepCircleColor}
                  d="M752.68 230.64c26.19 0 47.43 20.91 47.43 46.7S778.87 324 752.68 324s-47.42-20.91-47.42-46.7 21.23-46.66 47.42-46.66z"
                ></path>
                <text
                  id="_3"
                  fill="#fff"
                  data-name="3"
                  fontFamily="SegoeUI-Bold, Segoe UI"
                  fontSize="42.91"
                  fontWeight="700"
                  transform="matrix(1.01 0 0 1 740.22 295.37)"
                  style={{ isolation: "isolate" }}
                >
                  {stepSpec.stepOrder}
                </text>
              </g>
              <text
                id="stepTitle"
                fill={stepSpec.stepTitleColor}
                fontFamily="SegoeUI-Bold, Segoe UI"
                fontSize="36.37"
                fontWeight="700"
                transform="translate(844.31 295.37)"
                style={{ isolation: "isolate" }}
              >
                {stepSpec.stepTitle}
              </text>
            </g>
          </svg>
          <p
            id="stepText"
            style={{
              position: "absolute",
              top:"320px",
              fontFamily: "MyriadPro-Regular, Myriad Pro",
              fontSize: "25px",
              color: "#707070",
            }}
          >
            Sorry, your browser does not support inline SVG
            
            Sorry, your<br /> browser does not support inline SVG.
            browser does not<br /> support inline SVG SVGd oes 
            browser does not support <br />inline SVGd oes not support inline SVG
          </p>
        </Grid>
        <Grid
          style={{
            position: "relative",
          }}
          item
          xs={12}
        >
          <svg
            style={{
              display: "block",
              margin: "0 auto",
              //width:'90%'
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="50"
            viewBox="100 30 50 70"
            id="sliderDots"
            opacity="0.43"
          >
            <circle
              cx="50"
              cy="50"
              r="8"
              className={classes.clickable}
              onClick={() => {
                updateStep(1);
              }}
              id="step1Dot"
              fill={
                stepSpec.stepOrder === 1 ? stepSpec.stepCircleColor : "#707070"
              }
            ></circle>
            <circle
              cx="100"
              cy="50"
              r="8"
              className={classes.clickable}
              onClick={() => {
                updateStep(2);
              }}
              fill={
                stepSpec.stepOrder === 2 ? stepSpec.stepCircleColor : "#707070"
              }
              id="step2Dot"
            ></circle>
            <circle
              cx="150"
              cy="50"
              r="8"
              className={classes.clickable}
              onClick={() => {
                updateStep(3);
              }}
              id="step3Dot"
              fill={
                stepSpec.stepOrder === 3 ? stepSpec.stepCircleColor : "#707070"
              }
            ></circle>
            <circle
              cx="200"
              cy="50"
              r="8"
              className={classes.clickable}
              onClick={() => {
                updateStep(4);
              }}
              id="step4Dot"
              fill={
                stepSpec.stepOrder === 4 ? stepSpec.stepCircleColor : "#707070"
              }
            ></circle>
          </svg>
        </Grid>
      </Grid> */}
    </ReactScrollWheelHandler>
  );
};

export default Step;
