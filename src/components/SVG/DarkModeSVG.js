import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";

const DarkModeSVG = ({ dark }) => {
  const [isDark, setIsDark] = useState(dark);
  let mainCircle = useRef()
  let raySmallOne = useRef()
  let raySmallTwo = useRef()
  let raySmallThree = useRef()
  let raySmallFour = useRef()
  let raySmallFive = useRef()
  let raySmallSix = useRef()
  let raySmallSeven = useRef()
  let raySmallEight = useRef()
  let rayBigNW = useRef()
  let rayBigW = useRef()
  let rayBigSW = useRef()
  let rayBigS = useRef()
  let rayBigSE = useRef()
  let rayBigE = useRef()
  let rayBigNE = useRef()
  let rayBigN = useRef()
  let moonInnerOne = useRef()
  let moonInnerTwo = useRef()
  let moonInnerThree = useRef()
  let moonInnerFour = useRef()
  let cloudFront = useRef()
  let cloudBack = useRef()

  // TODO find a way to clean all the variables into arrays
  // let smallRays = [
  // raySmallOne,
  // raySmallTwo,
  // raySmallThree,
  // raySmallFour,
  // raySmallFive,
  // raySmallSix,
  // raySmallSeven,
  // raySmallEight,
  // ];
  // const bigRays = [
  //   rayBigNW,
  //   rayBigW,
  //   rayBigSW,
  //   rayBigS,
  //   rayBigSE,
  //   rayBigE,
  //   rayBigNE,
  //   rayBigN,
  // ];
  // const moonInner = [
  //   moonInnerOne,
  //   moonInnerTwo,
  //   moonInnerThree,
  //   moonInnerFour,
  // ];

  const tl = gsap.timeline({
    pause: true,
  });

  const handleToogleDarkMode = (e) => {
    e.preventDefault();
    tl.reversed() ? tl.play() : tl.reverse()
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(MorphSVGPlugin);
    if (!dark) {
      tl.to(mainCircle, { fill: "#f7cf52" })
        .to(
          [
            raySmallOne,
            raySmallTwo,
            raySmallThree,
            raySmallFour,
            raySmallFive,
            raySmallSix,
            raySmallSeven,
            raySmallEight,
          ],
          { stagger: 0.15, opacity: 0 },
          "<"
        )
        .to(
          [
            rayBigNW,
            rayBigW,
            rayBigSW,
            rayBigS,
            rayBigSE,
            rayBigE,
            rayBigNE,
            rayBigN,
          ],
          { stagger: 0.1, opacity: 0 },
          "<.6"
        )
        .to(
          [moonInnerOne, moonInnerTwo, moonInnerThree, moonInnerFour],
          { stagger: 0.15, opacity: 1 },
          "<"
        )
        .to(cloudFront, { xPercent: -80, opacity: 1 }, "<")
        .to(cloudBack, { xPercent: -80, opacity: 1 }, "<.2");
    }
  }, [tl, dark]);

  return (
    <svg
      id="Layer_darkm_mode"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="50"
      viewBox="0 0 25 26"
      onClick={e => handleToogleDarkMode(e)}
    >
      <g>
        <ellipse
          ref={el => {
            mainCircle = el;
          }}
          cx="12.96"
          cy="11.55"
          rx="6.41"
          ry="5.71"
          fill="#fcee21"
        />
        <ellipse
          id="moon-main"
          cx="12.96"
          cy="11.55"
          rx="6.41"
          ry="5.71"
          fill="#f7cf52"
        />
        <rect
          id="ray-big-s"
          ref={el => {
            rayBigS = el;
          }}
          x="12.52"
          y="18.37"
          width="0.89"
          height="4.74"
          fill="#fcee21"
        />
        <rect
          id="ray-big-n"
          ref={el => {
            rayBigN = el;
          }}
          x="12.52"
          width="0.89"
          height="4.74"
          fill="#fcee21"
        />
        <polygon
          id="ray-big-sw"
          ref={el => {
            rayBigSW = el;
          }}
          points="4.11 20 3.48 19.44 7.24 16.09 7.87 16.65 4.11 20"
          fill="#fcee21"
        />
        <polygon
          id="ray-big-ne"
          ref={el => {
            rayBigNE = el;
          }}
          points="18.68 7.01 18.05 6.45 21.81 3.1 22.44 3.66 18.68 7.01"
          fill="#fcee21"
        />
        <rect
          id="ray-big-w"
          ref={el => {
            rayBigW = el;
          }}
          y="11.16"
          width="5.31"
          height="0.79"
          fill="#fcee21"
        />
        <rect
          id="ray-big-e"
          ref={el => {
            rayBigE = el;
          }}
          x="20.61"
          y="11.16"
          width="5.31"
          height="0.79"
          fill="#fcee21"
        />
        <polygon
          id="ray-big-nw"
          ref={el => {
            rayBigNW = el;
          }}
          points="7.24 7.01 3.48 3.66 4.11 3.1 7.87 6.45 7.24 7.01"
          fill="#fcee21"
        />
        <polygon
          id="ray-big-se"
          ref={el => {
            rayBigSE = el;
          }}
          points="21.81 20 18.05 16.65 18.68 16.09 22.44 19.44 21.81 20"
          fill="#fcee21"
        />
        <g>
          <polygon
            id="ray-small-4"
            ref={el => {
              raySmallFour = el;
            }}
            points="16.27 19.71 15.48 18 16.3 17.7 17.09 19.41 16.27 19.71"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-8"
            ref={el => {
              raySmallEight = el;
            }}
            points="9.62 5.41 8.83 3.69 9.65 3.39 10.44 5.1 9.62 5.41"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-5"
            ref={el => {
              raySmallFive = el;
            }}
            points="9.65 19.71 8.83 19.41 9.62 17.7 10.44 18 9.65 19.71"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-1"
            ref={el => {
              raySmallOne = el;
            }}
            points="16.3 5.41 15.48 5.1 16.27 3.39 17.09 3.69 16.3 5.41"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-6"
            ref={el => {
              raySmallSix = el;
            }}
            points="4.14 15.23 3.8 14.5 5.72 13.79 6.06 14.53 4.14 15.23"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-2"
            ref={el => {
              raySmallTwo = el;
            }}
            points="20.2 9.31 19.86 8.58 21.78 7.87 22.12 8.6 20.2 9.31"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-7"
            ref={el => {
              raySmallSeven = el;
            }}
            points="5.72 9.31 3.8 8.6 4.14 7.87 6.06 8.58 5.72 9.31"
            fill="#f4581b"
          />
          <polygon
            id="ray-small-3"
            ref={el => {
              raySmallThree = el;
            }}
            points="21.78 15.23 19.86 14.53 20.2 13.79 22.12 14.5 21.78 15.23"
            fill="#f4581b"
          />
        </g>
        <circle
          id="moon-inner-3"
          ref={el => {
            moonInnerThree = el;
          }}
          cx="11.47"
          cy="9.82"
          r="0.97"
          fill="#f7cf52"
          stroke="#ffbc15"
          strokeMiterlimit="10"
          strokeWidth="0.25"
        />
        <circle
          id="moon-inner-2"
          ref={el => {
            moonInnerTwo = el;
          }}
          cx="15.58"
          cy="8.23"
          r="0.83"
          fill="#f7cf52"
          stroke="#ffbc15"
          strokeMiterlimit="10"
          strokeWidth="0.25"
        />
        <circle
          id="moon-inner-1"
          ref={el => {
            moonInnerOne = el;
          }}
          cx="11.01"
          cy="15.1"
          r="0.72"
          fill="#f7cf52"
          stroke="#ffbc15"
          strokeMiterlimit="10"
          strokeWidth="0.25"
        />
        <ellipse
          id="moon-inner-4"
          ref={el => {
            moonInnerFour = el;
          }}
          cx="14.42"
          cy="12.92"
          rx="1.52"
          ry="1.37"
          fill="#f7cf52"
          stroke="#ffbc15"
          strokeMiterlimit="10"
          strokeWidth="0.25"
        />
        <g>
          <path
            id="cloud-back"
            ref={el => {
              cloudBack = el;
            }}
            d="M75.9,54.33a2.06,2.06,0,0,0-1.58-.94,2.57,2.57,0,0,0-1.81-1.92,3,3,0,0,0-2.06.18c-1.71-1.51-4-1.73-5.4-.81a3.11,3.11,0,0,0-1.26,2.22,2.27,2.27,0,0,0-2.2,1,2.86,2.86,0,0,0-.21,2.75v0a1.1,1.1,0,0,1,.07.44h0a1.65,1.65,0,0,1,0,.39H75.54A3.34,3.34,0,0,0,75.9,54.33Z"
            transform="translate(-29.74 -39.25)"
            fill="#5a00b2"
            stroke="#6800b2"
            strokeMiterlimit="10"
            strokeWidth="0.25"
          />
          <path
            id="cloud-front"
            ref={el => {
              cloudFront = el;
            }}
            d="M70.43,55.89A2.05,2.05,0,0,0,68.85,55,2.54,2.54,0,0,0,67,53a3,3,0,0,0-2.06.17c-1.71-1.5-4-1.73-5.4-.8a3.09,3.09,0,0,0-1.26,2.22,2.24,2.24,0,0,0-2.2,1,2.89,2.89,0,0,0-.21,2.75l0,0a1.62,1.62,0,0,1,.07.43h0s0,0,0,.39H70.07A3.34,3.34,0,0,0,70.43,55.89Z"
            transform="translate(-29.74 -39.25)"
            fill="#5a00b2"
            stroke="#6800b2"
            strokeMiterlimit="10"
            strokeWidth="0.25"
          />
        </g>
      </g>
    </svg>
  );
};

export { DarkModeSVG };
