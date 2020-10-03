import React, { useRef, useEffect } from "react";
import {
  Container,
  ScreenContainer,
  Title,
  UL,
  A,
} from "./PostContentTableStyled";
import { ScreenSVG } from "../../SVG/Screen";
import scrollTo from "gatsby-plugin-smoothscroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useActiveHeading } from "../../../hooks/useActiveHeading";
export const PostContentTable = ({ data }) => {
  const {
    mdx: { tableOfContents },
  } = data;
  let container = useRef(null);
  let indicator = useRef(null);

  const headings = tableOfContents.items.map(h => ({ ...h, id: h.url }));

  const activeHeadingId = useActiveHeading(headings);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerEase(DrawSVGPlugin);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        container,
        toggleActions: "play none none none",
        start: "bottom 95%",
      },
    });

    tl.to(container, {
      duration: 0.3,
      minHeight: "30vh",
      opacity: 1,
    }).to(indicator, { duration: 1, drawSVG: "100%" });
  }, [indicator]);

  return (
    <Container>
      <ScreenContainer ref={e => (container = e)}>
        <Title onClick={() => scrollTo("#top")} isActive={activeHeadingId}>
          Content Table
        </Title>
        <div ref={e => (indicator = e)}>
          <ScreenSVG style={{ width: "100%" }} />
        </div>
        <UL>
          {headings.map(h => (
            <li key={h.url}>
              <A
                id={h.id}
                href="#w"
                onClick={() => scrollTo(h.url)}
                key={h.url}
                isActive={h.id === activeHeadingId}
              >
                {h.title}
              </A>
            </li>
          ))}
        </UL>
      </ScreenContainer>
    </Container>
  );
};
