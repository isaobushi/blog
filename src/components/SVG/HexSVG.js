import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";

const HexSVG = ({ path, dark }) => {
  let shadow1 = useRef(null)
  let shadow2 = useRef(null)
  let shadow3 = useRef(null)
  let shadow4 = useRef(null)
  let shadow5 = useRef(null)
  let shadow6 = useRef(null)
  let shadow7 = useRef(null)
  let shadow8 = useRef(null)
  let shadow9 = useRef(null)
  let shadow10 = useRef(null)
  let shadow11 = useRef(null)
  let shadow12 = useRef(null)
  let shadow13 = useRef(null)
  let shadow14 = useRef(null)
  let shadow15 = useRef(null)
  let Hex1 = useRef(null)
  let Hex2 = useRef(null)
  let Hex3 = useRef(null)
  let Hex4 = useRef(null)
  let Hex5 = useRef(null)
  let Hex6 = useRef(null)
  let Hex7 = useRef(null)
  let Hex8 = useRef(null)
  let Hex9 = useRef(null)
  let Hex10 = useRef(null)
  let Hex11 = useRef(null)
  let Hex12 = useRef(null)
  let Hex13 = useRef(null)
  let Hex14 = useRef(null)
  let Hex15 = useRef(null)
  const handleHoverHexEnter = (id) => gsap.to(`#shadow-${id}`,0.5,{stagger: 0.2,attr: { dx: 10, dy: 0, stdDeviation: 5},},"<")
  const handleHoverHexExit = (id) =>gsap.to(`#shadow-${id}`,0.5,{stagger: 0.2, attr: { dx: 0, dy: 0, stdDeviation: 0},},"<")
 
          
  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(DrawSVGPlugin);
    gsap.fromTo(
      [
        Hex1,
        Hex2,
        Hex3,
        Hex4,
        Hex5,
        Hex6,
        Hex7,
        Hex8,
        Hex9,
        Hex10,
        Hex11,
        Hex12,
        Hex13,
        Hex14,
        Hex15,
      ],
      2,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        stagger: {
          grid: [7, 15],
          from: "end",
          ease: "power2.in",
          amount: 1.5,
        },
      }
    );
    gsap.fromTo(
      [
        shadow1,
        shadow2,
        shadow3,
        shadow4,
        shadow5,
        shadow6,
        shadow7,
        shadow8,
        shadow9,
        shadow10,
        shadow11,
        shadow12,
        shadow13,
        shadow14,
        shadow15,
      ],
      {duration:2, attr: { dx: 0, dy: 0, stdDeviation: 0 } },
      {
        attr: { dx: 10, dy: 10, stdDeviation: 10 },
        stagger: {
          grid: [7, 15],
          from: "end",
          ease: "power2.in",
          amount: 1.5,
        },
      }
    );
  }, []);

  return (
    <svg
      id="Hex"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="903.52"
      height="837.55"
      viewBox="0 0 903.52 937.55"
    >
      <defs>
        <filter id="shadow1">
          <feDropShadow
            ref={el => {
              shadow1 = el;
            }}
            id="shadow-1"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow2">
          <feDropShadow
            ref={el => {
              shadow2 = el;
            }}
            id="shadow-2"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow3">
          <feDropShadow
            ref={el => {
              shadow3 = el;
            }}
            id="shadow-3"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow4">
          <feDropShadow
            ref={el => {
              shadow4 = el;
            }}
            id="shadow-4"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow5">
          <feDropShadow
            ref={el => {
              shadow5 = el;
            }}
            id="shadow-5"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow6">
          <feDropShadow
            ref={el => {
              shadow6 = el;
            }}
            id="shadow-6"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow7">
          <feDropShadow
            ref={el => {
              shadow7 = el;
            }}
            id="shadow-7"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow8">
          <feDropShadow
            ref={el => {
              shadow8 = el;
            }}
            id="shadow-8"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow9">
          <feDropShadow
            ref={el => {
              shadow9 = el;
            }}
            id="shadow-9"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow10">
          <feDropShadow
            ref={el => {
              shadow10 = el;
            }}
            id="shadow-10"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow11">
          <feDropShadow
            ref={el => {
              shadow11 = el;
            }}
            id="shadow-11"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow12">
          <feDropShadow
            ref={el => {
              shadow12 = el;
            }}
            id="shadow-12"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow13">
          <feDropShadow
            ref={el => {
              shadow13 = el;
            }}
            id="shadow-13"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow14">
          <feDropShadow
            ref={el => {
              shadow14 = el;
            }}
            id="shadow-14"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
        <filter id="shadow15">
          <feDropShadow
            ref={el => {
              shadow15 = el;
            }}
            id="shadow-15"
            dx="0"
            dy="0"
            stdDeviation="0"
            floodColor="#d7ddeb"
          />
        </filter>
      </defs>
      <path
        filter="url(#shadow1)"
        id="hex-1"
        ref={el => {
          Hex1 = el;
        }}
        className="hex"
        d="M585.44,596.57l41.25-88.72a5,5,0,0,0,0-4.2l-41.25-88.72a3.38,3.38,0,0,0-3-2.13H506.83a3.38,3.38,0,0,0-3,2.13l-41.25,88.72a5,5,0,0,0,0,4.2l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,585.44,596.57Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(1)}
        onMouseLeave={() => handleHoverHexExit(1)}
      />
      <path
        filter="url(#shadow2)"
        id="hex-2"
        ref={el => {
          Hex2 = el;
        }}
        className="hex"
        d="M462.68,875.42l41.26-88.73a5.1,5.1,0,0,0,0-4.19l-41.26-88.72a3.38,3.38,0,0,0-3-2.13H384.07a3.38,3.38,0,0,0-3,2.13L339.83,782.5a5.13,5.13,0,0,0,0,4.2l41.26,88.72a3.38,3.38,0,0,0,3,2.13H459.7A3.38,3.38,0,0,0,462.68,875.42Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(2)}
        onMouseLeave={() => handleHoverHexExit(2)}
      />
      <path
        filter="url(#shadow3)"
        id="hex-3"
        ref={el => {
          Hex3 = el;
        }}
        className="hex"
        d="M339.61,224.77l41.25-88.72a5.1,5.1,0,0,0,0-4.19L339.61,43.13a3.4,3.4,0,0,0-3-2.13H261a3.38,3.38,0,0,0-3,2.13l-41.26,88.73a5.1,5.1,0,0,0,0,4.19L258,224.77a3.38,3.38,0,0,0,3,2.13h75.63A3.4,3.4,0,0,0,339.61,224.77Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(3)}
        onMouseLeave={() => handleHoverHexExit(3)}
      />
      <path
        filter="url(#shadow4)"
        id="hex-4"
        ref={el => {
          Hex4 = el;
        }}
        className="hex"
        d="M831.28,410.67,872.53,322a5.1,5.1,0,0,0,0-4.19L831.28,229a3.4,3.4,0,0,0-3-2.13H752.66a3.38,3.38,0,0,0-3,2.13l-41.26,88.73a5.1,5.1,0,0,0,0,4.19l41.26,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.4,3.4,0,0,0,831.28,410.67Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(4)}
        onMouseLeave={() => handleHoverHexExit(4)}
      />
      <path
        filter="url(#shadow5)"
        id="hex-5"
        ref={el => {
          Hex5 = el;
        }}
        className="hex"
        d="M831.28,596.57l41.25-88.72a5.12,5.12,0,0,0,0-4.2l-41.25-88.72a3.4,3.4,0,0,0-3-2.13H752.66a3.38,3.38,0,0,0-3,2.13l-41.26,88.72a5.13,5.13,0,0,0,0,4.2l41.26,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.4,3.4,0,0,0,831.28,596.57Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(5)}
        onMouseLeave={() => handleHoverHexExit(5)}
      />
      <path
        filter="url(#shadow6)"
        id="hex-6"
        ref={el => {
          Hex6 = el;
        }}
        className="hex"
        d="M954,689.52l41.26-88.72a5.13,5.13,0,0,0,0-4.2L954,507.88a3.38,3.38,0,0,0-3-2.13H875.42a3.39,3.39,0,0,0-3,2.13L831.18,596.6a5.13,5.13,0,0,0,0,4.2l41.25,88.72a3.39,3.39,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,954,689.52Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(6)}
        onMouseLeave={() => handleHoverHexExit(6)}
      />
      <path
        filter="url(#shadow7)"
        id="hex-7"
        ref={el => {
          Hex7 = el;
        }}
        className="hex"
        d="M1077.11,782.47l41.25-88.72a5,5,0,0,0,0-4.2l-41.25-88.72a3.38,3.38,0,0,0-3-2.13H998.5a3.38,3.38,0,0,0-3,2.13l-41.25,88.72a5,5,0,0,0,0,4.2l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,1077.11,782.47Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(7)}
        onMouseLeave={() => handleHoverHexExit(7)}
      />
      <path
        filter="url(#shadow8)"
        id="hex-8"
        ref={el => {
          Hex8 = el;
        }}
        className="hex"
        d="M339.61,596.57l41.25-88.72a5.12,5.12,0,0,0,0-4.2l-41.25-88.72a3.4,3.4,0,0,0-3-2.13H261a3.38,3.38,0,0,0-3,2.13l-41.26,88.72a5.13,5.13,0,0,0,0,4.2L258,596.57a3.38,3.38,0,0,0,3,2.13h75.63A3.4,3.4,0,0,0,339.61,596.57Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(8)}
        onMouseLeave={() => handleHoverHexExit(8)}
      />
      <path
        filter="url(#shadow9)"
        id="hex-9"
        ref={el => {
          Hex9 = el;
        }}
        className="hex"
        d="M708.36,689.52l41.25-88.72a5,5,0,0,0,0-4.2l-41.25-88.72a3.38,3.38,0,0,0-3-2.13H629.74a3.38,3.38,0,0,0-3,2.13L585.51,596.6a5,5,0,0,0,0,4.2l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,708.36,689.52Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(9)}
        onMouseLeave={() => handleHoverHexExit(9)}
      />
      <path
        filter="url(#shadow10)"
        id="hex-10"
        ref={el => {
          Hex10 = el;
        }}
        className="hex"
        d="M462.68,689.52l41.26-88.72a5.13,5.13,0,0,0,0-4.2l-41.26-88.72a3.38,3.38,0,0,0-3-2.13H384.07a3.38,3.38,0,0,0-3,2.13L339.83,596.6a5.13,5.13,0,0,0,0,4.2l41.26,88.72a3.38,3.38,0,0,0,3,2.13H459.7A3.38,3.38,0,0,0,462.68,689.52Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(10)}
        onMouseLeave={() => handleHoverHexExit(10)}
      />
      <path
        filter="url(#shadow11)"
        id="hex-11"
        ref={el => {
          Hex11 = el;
        }}
        className="hex"
        d="M708.36,503.62l41.25-88.72a5,5,0,0,0,0-4.2L708.36,322a3.38,3.38,0,0,0-3-2.13H629.74a3.38,3.38,0,0,0-3,2.13L585.51,410.7a5,5,0,0,0,0,4.2l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,708.36,503.62Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(11)}
        onMouseLeave={() => handleHoverHexExit(11)}
      />
      <path
        filter="url(#shadow12)"
        id="hex-12"
        ref={el => {
          Hex12 = el;
        }}
        className="hex"
        d="M708.36,317.72,749.61,229a5,5,0,0,0,0-4.19l-41.25-88.73a3.38,3.38,0,0,0-3-2.13H629.74a3.38,3.38,0,0,0-3,2.13l-41.25,88.73a5,5,0,0,0,0,4.19l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,708.36,317.72Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(12)}
        onMouseLeave={() => handleHoverHexExit(12)}
      />
      <path
        filter="url(#shadow13)"
        id="hex-13"
        ref={el => {
          Hex13 = el;
        }}
        className="hex"
        d="M462.68,503.62l41.26-88.72a5.13,5.13,0,0,0,0-4.2L462.68,322a3.38,3.38,0,0,0-3-2.13H384.07a3.38,3.38,0,0,0-3,2.13L339.83,410.7a5.12,5.12,0,0,0,0,4.2l41.26,88.72a3.38,3.38,0,0,0,3,2.13H459.7A3.38,3.38,0,0,0,462.68,503.62Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(13)}
        onMouseLeave={() => handleHoverHexExit(13)}
      />
      <path
        filter="url(#shadow14)"
        id="hex-14"
        ref={el => {
          Hex14 = el;
        }}
        className="hex"
        d="M585.44,410.67,626.69,322a5,5,0,0,0,0-4.19L585.44,229a3.38,3.38,0,0,0-3-2.13H506.83a3.38,3.38,0,0,0-3,2.13l-41.25,88.73a5,5,0,0,0,0,4.19l41.25,88.72a3.38,3.38,0,0,0,3,2.13h75.63A3.38,3.38,0,0,0,585.44,410.67Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(14)}
        onMouseLeave={() => handleHoverHexExit(14)}
      />
      <path
        filter="url(#shadow15)"
        id="hex-15"
        ref={el => {
          Hex15 = el;
        }}
        className="hex"
        d="M462.68,317.72,503.94,229a5.1,5.1,0,0,0,0-4.19l-41.26-88.73a3.38,3.38,0,0,0-3-2.13H384.07a3.38,3.38,0,0,0-3,2.13l-41.26,88.73a5.1,5.1,0,0,0,0,4.19l41.26,88.72a3.38,3.38,0,0,0,3,2.13H459.7A3.38,3.38,0,0,0,462.68,317.72Z"
        transform="translate(-215.8 -40.5)"
        fill="#fff"
        stroke="#d7ddeb"
        strokeMiterlimit="10"
        onMouseEnter={() => handleHoverHexEnter(15)}
        onMouseLeave={() => handleHoverHexExit(15)}
      />
    </svg>
  );
};

export { HexSVG };
