import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  HiddenCard,
  PostCardContainer,
  Slider,
} from "./PostCardStyled";
import { InfoSVG } from "../../SVG/InfoSVG";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import * as theme from "../../../utils/Theme";

const PostCard = ({ variant, children }) => {
  let [isDown, setIsDown] = useState(false);
  let panel = useRef(null);
  let trigger = useRef(null);
  let curtain = useRef(null);

  const handleCurtain = () => {
    setIsDown(!isDown);
    console.log("handleCurtain -> isDown", isDown);
    const tl = gsap.timeline();
    isDown
      ? tl.to(curtain, { duration: 0.3, y: 0 }).to(trigger, {
          duration: 0.2,
          boxShadow: `rgb(209, 217, 230) inset 0px 0px 0px,
          rgb(255, 255, 255) inset 0px 0px 0px, rgb(209, 217, 230) 12px 12px 20px,
          rgb(255, 255, 255) -12px -12px 16px`,
        })
      : tl.to(curtain, { duration: 0.5, y: "99%" }).to(
          trigger,
          {
            duration: 0.1,
            boxShadow: `rgb(209, 217, 230) 0px 0px 0px inset, rgb(255, 255, 255) 0px 0px 0px inset, rgb(103, 118, 142) 12px 12px 20px, rgb(255, 255, 255) -12px -12px 16px`,
          },
          "<"
        );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        toggleActions: "play none none none",
        start: "top 80%",
      },
    });

    tl.to(panel, {
      duration: 0.4,
      width: 0,
    }).to(trigger, {
      borderLeft: `3px solid ${theme.textColor}`,
      boxShadow: `rgb(209, 217, 230) inset 0px 0px 0px,
      rgb(255, 255, 255) inset 0px 0px 0px, rgb(209, 217, 230) 12px 12px 20px,
      rgb(255, 255, 255) -12px -12px 16px`,
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <HiddenCard
        ref={e => {
          curtain = e;
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint
        totam magni odio maiores tempora culpa, aliquid provident nostrum,
        perferendis optio. Quibusdam minima magnam corporis possimus itaque
        dolor sint iure.
      </HiddenCard>
      <PostCardContainer
        variant={variant}
        ref={e => (trigger = e)}
        onClick={() => handleCurtain()}
      >
        {children}
        <Slider ref={e => (panel = e)}></Slider>
        <Circle>
          <InfoSVG />
        </Circle>
      </PostCardContainer>
    </div>
  );
};

export { PostCard };
