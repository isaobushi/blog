import React, { useContext, useEffect, useRef, useState } from "react";
import {
  HiddenCard,
  PostCardContainer,
  Slider,
  ToogleCode,
} from "./PostCardStyled";
import { DarkContext } from "../../../context/DarkContext";
import { CodeSVG } from "../../SVG/CodeSVG";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import * as theme from "../../../utils/Theme";
import { CodeCard } from "../CodeCard/CodeCard.js";
import * as shadow from "../../../utils/shadows";

const PostCard = ({ variant, children }) => {
  const { dark } = useContext(DarkContext);
  const [isDown, setIsDown] = useState(false);
  const opacity = isDown ? 1 : 0;
  let slider = useRef(null);
  let trigger = useRef(null);
  let curtain = useRef(null);

  const handleCurtain = () => {
    setIsDown(!isDown);
    const tl = gsap.timeline();
    isDown
      ? tl.set(curtain, { duration: 0.1, y: 0, height: 0 }).to(
          trigger,
          {
            duration: 0.2,
            boxShadow: dark ? shadow.shadowInnerDark : shadow.shadowInnerLight,
          },
          "<"
        )
      : tl
          .to(trigger, {
            duration: 0.2,
            boxShadow: dark
              ? shadow.shadowDarkNeutral
              : shadow.shadowLightNeutral,
          })
          .to(curtain, { duration: 0.3, y: "99%", height: "100%", delay: 0.3 });
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

    tl.to(trigger, { duration: 0.3, height: "100%" })
      .to(trigger, { duration: 0.1, opacity: 1 })
      .to(slider, {
        duration: 0.2,
        width: 0,
      })
      .to(trigger, {
        borderLeft: `3px solid ${theme.buttonBackground}`,
        boxShadow: theme.postCardBoxShadow,
      });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 10,
      }}
    >
      <HiddenCard
        ref={e => {
          curtain = e;
        }}
      >
        <CodeCard opacity={opacity} />
      </HiddenCard>
      <PostCardContainer variant={variant} ref={e => (trigger = e)}>
        {children}
        <Slider ref={e => (slider = e)} isDark={dark}></Slider>
        <ToogleCode onClick={() => handleCurtain()}>
          snippet <CodeSVG />
        </ToogleCode>
      </PostCardContainer>
    </div>
  );
};

export { PostCard };
