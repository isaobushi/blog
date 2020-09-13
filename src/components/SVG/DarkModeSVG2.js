import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";

const DarkModeSVG2 = ({ dark, cb}) => {
  let moon = useRef()
  let sun = useRef()
  let crater1 = useRef()
  let crater2 = useRef()
  let crater3 = useRef()
  let crater4 = useRef()

  const tlClick = gsap.timeline({
    pause: true,
  });

  const handleToogleDarkMode = e => {
    cb(!dark)
    e.preventDefault();
    tlClick.reversed() ? tlClick.play() : tlClick.reverse();
  };

  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(MorphSVGPlugin);
    MorphSVGPlugin.convertToPath(sun);
    MorphSVGPlugin.convertToPath(moon);
    let craters = [
      crater1,
      crater2,
      crater3,
      crater4,
    ];
    if (dark) {
      tlClick
        .to([moon, crater1, crater2, crater3, crater4], {
          duration: 1.2,
          x: 178,
        })
    }
  }, [tlClick, dark]);

  return (
    <svg
      id="switch-dark-mode"
      data-name="Layer 1"
      viewBox="0 0 293 103"
      onClick={e => handleToogleDarkMode(e)}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1=".5"
          x2="292.5"
          y1="51.5"
          y2="51.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".19" stopColor="#3feef5" />
          <stop offset=".99" stopColor="#29abe2" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="558"
          x2="660.43"
          y1="419.46"
          y2="419.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#ccc" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="654"
          x2="737.96"
          y1="444.96"
          y2="444.96"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-4"
          x1=".5"
          x2="292.5"
          y1="51.5"
          y2="51.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".19" stopColor="#000d69" />
          <stop offset=".99" stopColor="#001d2c" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="35.5"
          x2="44.5"
          y1="33"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#ccc" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="25.5"
          x2="36.5"
          y1="61"
          y2="61"
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-7"
          x1="63.5"
          x2="79.5"
          y1="57.5"
          y2="57.5"
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-8"
          x1="65.5"
          x2="71.5"
          y1="88.5"
          y2="88.5"
          xlinkHref="#linear-gradient-5"
        />
        <radialGradient
          id="radial-gradient"
          cx="235"
          cy="51"
          r="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset=".05" stopColor="#fffff6" />
          <stop offset=".14" stopColor="#ffffdc" />
          <stop offset=".25" stopColor="#feffb3" />
          <stop offset=".37" stopColor="#feff79" />
          <stop offset=".52" stopColor="#fdff30" />
          <stop offset=".57" stopColor="#fdff15" />
          <stop offset=".87" stopColor="#ecc200" />
          <stop offset=".99" stopColor="#fcee21" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="588"
          cy="435"
          r="45"
          gradientTransform="matrix(-.5 .87 -.93 -.53 753.09 -224.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".84" stopColor="#fff" />
          <stop offset="1" stopColor="#ccc" />
        </radialGradient>
      </defs>
      <rect
        id="light-sky"
        width="292"
        height="102"
        x=".5"
        y=".5"
        fill="url(#linear-gradient)"
        rx="50.09"
      />
      <path
        id="cloud-1"
        fill="url(#linear-gradient-2)"
        d="M559.28 435.31c-4.64-7.31 4-23.34 14.63-25.49 7.18-1.46 11.31 4.27 18.7 2.12 8.57-2.49 6.92-11 14.63-13.45 9.35-2.94 15.7 8.38 30.89 7.08 7.38-.63 9.81-3.63 13.82-2.12 6.87 2.58 10.49 13.43 7.32 20.53-4.11 9.21-20.82 14.8-40.65 10.62-3.13.83-51.32 13.32-59.34.71z"
        transform="translate(-532 -383)"
      />
      <path
        id="cloud-2"
        fill="url(#linear-gradient-3)"
        d="M654.57 459.13c-3.41-4.39 9.48-15 12.12-17.24 3.1-2.64 6-5.09 10.84-6.64 6.56-2.12 9.11-.16 16.77-1 13.05-1.48 14.92-8.26 23-7.1 6.27.9 10.19 5.72 14 10.45 3.35 4.11 8.34 9.72 6.06 13.88-3.41 6.23-17.25 10-33.67 7.19-2.56.54-42.48 8.98-49.12.46z"
        transform="translate(-532 -383)"
      />
      <path
        fill="url(#radial-gradient)"
        id="sun"
        ref={el => {
          sun = el;
        }}
        d="M280,51 C280,75.85281 259.85281,96 235,96 210.14719,96 190,75.85281 190,51 190,26.14719 210.14719,6 235,6 259.85281,6 280,26.14719 280,51 z"
      ></path>
      <rect
        id="dark-sky"
        width="292"
        height="102"
        x=".5"
        y=".5"
        fill="url(#linear-gradient-4)"
        rx="50.09"
      />
      <g id="moon-set">
        <path
          fill="url(#radial-gradient-2)"
          id="moon"
          ref={el => {
            moon = el;
          }}
          d="M101,52 C101,76.85281 80.85281,97 56,97 31.14719,97 11,76.85281 11,52 11,27.14719 31.14719,7 56,7 80.85281,7 101,27.14719 101,52 z"
        ></path>
        <g id="craters">
          <circle
            id="crater-1"
            ref={el => {
              crater1 = el;
            }}
            cx="40"
            cy="33"
            r="4.5"
            fill="url(#linear-gradient-5)"
          />
          <circle
            id="crater-2"
            ref={el => {
              crater2 = el;
            }}
            cx="31"
            cy="61"
            r="5.5"
            fill="url(#linear-gradient-6)"
          />
          <circle
            id="crater-3"
            ref={el => {
              crater3 = el;
            }}
            cx="71.5"
            cy="57.5"
            r="8"
            fill="url(#linear-gradient-7)"
          />
          <circle
            id="crater-4"
            ref={el => {
              crater4 = el;
            }}
            cx="68.5"
            cy="88.5"
            r="3"
            fill="url(#linear-gradient-8)"
          />
        </g>
      </g>

      <circle id="star-1" cx="143.5" cy="46.5" r="2.5" fill="#fff" />
      <circle id="star-2" cx="172.5" cy="24.5" r=".5" fill="#fff" />
      <circle id="star-3" cx="184" cy="63" r="2" fill="#fff" />
      <circle id="star-4" cx="232.5" cy="17.5" r="1.5" fill="#fff" />
      <circle id="star-5" cx="228" cy="35" r="2" fill="#fff" />
      <circle id="star-6" cx="207.5" cy="89.5" r="2.5" fill="#fff" />
      <circle id="star-7" cx="174" cy="87" r="2" fill="#fff" />
    </svg>
  );
};

export { DarkModeSVG2 };
