import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js"

const SVGLogo = () => {
  let bracketStart = useRef(null)
  let letterA = useRef(null)
  let usb = useRef(null)
  let usbCircle = useRef(null)
  let switchCircle = useRef(null)
  let switchLine = useRef(null)
  let letterD = useRef(null)
  let letterE = useRef(null)
  let letterAEnd = useRef(null)
  let lineCode = useRef(null)
  let bracketEnd = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(MorphSVGPlugin)
    const tl = gsap.timeline({
      delay: 1,
      yoyo: true,
      repeatDelay: 1,
      repeat: 1,
    })
    MorphSVGPlugin.convertToPath(usbCircle)
    {/* prettier-ignore */ }
    /* eslint-disable */
    tl.to(letterA, 1, { morphSVG: bracketStart, fill: "#F58F29" })
      .to(letterD, 1, { morphSVG: switchCircle, fill: "#6279B8" }, "<")
      .fromTo(
        switchLine, 1,
        { yPercent: -500, opacity: 0, fill: "#4c9f70" },
        { yPercent: 0, opacity: 1, fill: "#4C9F70" },
        "<"
      )
      .to(letterD,{ rotate: -90, transformOrigin: "50% 50%", yPercent: -10 },"+=0.1")
      .to(switchLine,{rotate: -90,yPercent: 60,xPercent: -290,transformOrigin: "50% 50%",},"<")
      .to(letterE,1,{ rotate: 90, transformOrigin: "50% 50%", xPercent: 15 },"<")
      .to(letterE, 1, { morphSVG: usb, fill: "#E63946" }, "<")
      .to(letterAEnd,1,{ morphSVG: bracketEnd, fill: "#E63946", xPercent: 60 },"<")
      .fromTo(
        lineCode,
        1,
        { opacity: 0, yPercent: -300, xPercent: 100 },
        { opacity: 1, yPercent: -5, xPercent: 100 }
      )
  }, [])

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="195.5"
      height="69.11"
      viewBox="15 0 75.5 22.11"
    >
      <text x="-260.32" y="-214.97" />{" "}
      <g>
        <path
          ref={el => {
            bracketStart = el
          }}
          id="bracket-s"
          d="M283.47,225.2a.44.44,0,0,1,.22.38.63.63,0,0,1-.07.26.5.5,0,0,1-.44.3.47.47,0,0,1-.24-.07l-4.71-2.66c-.32-.17-.48-.34-.48-.66s.16-.51.49-.7l4.71-2.63a.59.59,0,0,1,.23-.07.52.52,0,0,1,.44.3.57.57,0,0,1,.08.28.4.4,0,0,1-.23.36L279,222.73Z"
          transform="translate(-260.32 -214.97)"
        />
        <path
          ref={el => {
            letterA = el
          }}
          id="a-s"
          d="M278.12,226.85a.46.46,0,0,1-.46.34.64.64,0,0,1-.24,0,.53.53,0,0,1-.42-.49.69.69,0,0,1,0-.2l3.27-8.2a.81.81,0,0,1,.82-.56.85.85,0,0,1,.86.56l3.26,8.22a.49.49,0,0,1,.05.2.53.53,0,0,1-.44.48.52.52,0,0,1-.21,0,.49.49,0,0,1-.49-.34l-.95-2.48h-4.15Zm4.72-3.48-1.33-3.49a9.55,9.55,0,0,1-.37-1.14,9.28,9.28,0,0,1-.38,1.16l-1.35,3.47Z"
          transform="translate(-260.32 -214.97)"
        />
      </g>
      <path
        id="n"
        d="M293.6,218.2c0-.34.24-.49.58-.49s.56.15.56.49v8.24a.66.66,0,0,1-.72.75c-.52,0-.71-.2-1-.68l-3.18-5.15a24.92,24.92,0,0,1-1.35-2.54c.07.77.17,2.44.17,4.2v3.68c0,.33-.24.49-.57.49s-.57-.16-.57-.49v-8.27a.68.68,0,0,1,.75-.72,1,1,0,0,1,1,.57l3,4.91c.55.9,1.22,2.18,1.53,2.85-.07-.74-.19-2.48-.19-4.21Z"
        transform="translate(-260.32 -214.97)"
      />
      <path
        ref={el => {
          letterD = el
        }}
        id="d"
        d="M297.56,219c0-.93.37-1.3,1.22-1.3h2.14c2.65,0,4.21,1.68,4.21,4.57s-1.59,4.77-4.21,4.77h-2.14c-.85,0-1.22-.37-1.22-1.28Zm1.14,6.59c0,.28.14.41.38.41h1.78c1.94,0,3.08-1.38,3.08-3.72s-1.07-3.55-3.05-3.55h-1.8a.38.38,0,0,0-.39.4Z"
        transform="translate(-260.32 -214.97)"
      />
      <g>
        <path
          ref={el => {
            switchCircle = el
          }}
          id="switch-1"
          d="M304.12,220.07a.44.44,0,0,0-.57,0,.32.32,0,0,0,0,.5,3.11,3.11,0,0,1,0,4.85,4.35,4.35,0,0,1-2.81,1,4.28,4.28,0,0,1-2.8-1,3.1,3.1,0,0,1,0-4.84.32.32,0,0,0,0-.5.45.45,0,0,0-.58,0,3.74,3.74,0,0,0,0,5.84,5.33,5.33,0,0,0,6.76,0,3.73,3.73,0,0,0,0-5.84Z"
          transform="translate(-260.32 -214.97)"
        />
        <path
          ref={el => {
            switchLine = el
          }}
          id="switch-2"
          d="M300.74,222.35a.38.38,0,0,0,.41-.36v-3.86a.38.38,0,0,0-.41-.35.39.39,0,0,0-.41.35V222A.39.39,0,0,0,300.74,222.35Z"
          transform="translate(-260.32 -214.97)"
        />
      </g>
      <path
        id="r"
        d="M314.06,226.43a.69.69,0,0,1,0,.2.48.48,0,0,1-.39.47,1.26,1.26,0,0,1-.27,0,.49.49,0,0,1-.47-.32l-.29-.76c-.87-2.34-1.2-3.19-2.4-3.19h-2.21v3.76a.49.49,0,0,1-.55.51c-.34,0-.58-.17-.58-.52V219c0-.93.37-1.3,1.23-1.3H311c1.74,0,2.7.93,2.7,2.4a2.2,2.2,0,0,1-1.89,2.34c.72.21,1.1,1,2,3.26Zm-3.24-4.55a1.55,1.55,0,0,0,1.69-1.59,1.43,1.43,0,0,0-1.62-1.57h-2.43c-.26,0-.4.13-.4.42v2.74Z"
        transform="translate(-260.32 -214.97)"
      />
      <path
        ref={el => {
          letterE = el
        }}
        id="e"
        d="M317.31,225.64c0,.27.18.38.44.38h4.3a.47.47,0,0,1,.48.52.48.48,0,0,1-.48.52h-4.64c-.86,0-1.23-.37-1.23-1.28V219c0-.93.37-1.3,1.23-1.3h4.53a.47.47,0,0,1,.48.52.48.48,0,0,1-.48.53h-4.22c-.29,0-.41.13-.41.41v2.49h4.09a.46.46,0,0,1,.47.51.47.47,0,0,1-.47.51h-4.09Z"
        transform="translate(-260.32 -214.97)"
      />
      <path
        ref={el => {
          letterAEnd = el
        }}
        id="a-e"
        d="M326.1,226.8a.46.46,0,0,1-.47.34.93.93,0,0,1-.23,0,.53.53,0,0,1-.42-.49.82.82,0,0,1,0-.21l3.26-8.19a.83.83,0,0,1,.83-.56.84.84,0,0,1,.85.56l3.26,8.22a.37.37,0,0,1,.05.2.52.52,0,0,1-.43.48.54.54,0,0,1-.22,0,.51.51,0,0,1-.49-.34l-.94-2.48H327Zm4.72-3.48-1.34-3.49c-.13-.35-.26-.73-.37-1.14a9.12,9.12,0,0,1-.37,1.15l-1.35,3.48Z"
        transform="translate(-260.32 -214.97)"
      />
      <g>
        <path
          ref={el => {
            lineCode = el
          }}
          id="line-code"
          d="M324.9,226.34a.28.28,0,0,1-.29.21.34.34,0,0,1-.17,0c-.17-.06-.27-.15-.27-.27a.28.28,0,0,1,0-.13l3.09-7.56a.32.32,0,0,1,.32-.21.44.44,0,0,1,.16,0,.31.31,0,0,1,.25.28.35.35,0,0,1,0,.14Z"
          transform="translate(-260.32 -214.97)"
        />
        <path
          ref={el => {
            bracketEnd = el
          }}
          id="bracket-e"
          d="M329.11,220.59a.43.43,0,0,1-.21-.37A.58.58,0,0,1,329,220a.47.47,0,0,1,.4-.3.39.39,0,0,1,.23.07l4.4,2.62c.3.2.46.36.46.7a.72.72,0,0,1-.44.66l-4.42,2.66a.35.35,0,0,1-.21.07.47.47,0,0,1-.42-.3.62.62,0,0,1-.06-.26.42.42,0,0,1,.21-.37L333.3,223Z"
          transform="translate(-260.32 -214.97)"
        />
      </g>
      <g>
        <path
          ref={el => {
            usb = el
          }}
          id="usb"
          d="M323.89,217h-2.15v1.83h.62v1.8l-2.77.4v-4.29h1.09L319.13,215l-1.54,1.75h1.08v5.35l-2.76-.4v-1.88a.93.93,0,0,0,.61-.83,1.09,1.09,0,0,0-2.15,0,.93.93,0,0,0,.62.83v2.55l3.68.52v1.47a1.77,1.77,0,0,0-1.53,1.65,2,2,0,0,0,4,0,1.78,1.78,0,0,0-1.54-1.65v-2.51l3.69-.53v-2.47h.61V217Zm-3.68,9a1.09,1.09,0,0,1-2.15,0,1.09,1.09,0,0,1,2.15,0Z"
          transform="translate(-260.32 -214.97)"
        />
        <circle
          ref={el => {
            usbCircle = el
          }}
          id="usb-circle"
          cx="55.1"
          cy="3.95"
          r="0.59"
          fill="#fff"
        />
        <rect
          id="usb-rect"
          x="61.91"
          y="2.29"
          width="1.22"
          height="1.22"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export { SVGLogo }
