import React, { useEffect, useRef, useState } from "react";
import {
  CardItem,
  Main,
  ReadMore,
  ReadTime,
  Tag,
  Title,
} from "./PostItemStyled";
import { Link } from "gatsby";
import { ButtonSquarred } from "../General/Button/Button";
import gsap from "gsap/gsap-core";

const PostItem = ({ title, date, tag, slug, dark, post, ...props }) => {
  const [aniamtionArrows, setAnimationArrows] = useState();
  let arrow1 = useRef(null);
  let arrow2 = useRef(null);
  let arrow3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ pause: true });
    setAnimationArrows(
      tl
        .to([arrow1, arrow2, arrow3], {
          duration: 0.5,
          stagger: 0.1,
          scale: 3,
          color: "orange",
          opacity: 1,
        })
        .pause()
    );
  }, []);

  const extimateDurationRead = text => {
    let lengthText = text.split(" ").length;
    let minutes = Math.floor(lengthText / 200);
    return minutes;
  };
  let minutes = extimateDurationRead(post);
  return (
    <CardItem>
      <ButtonSquarred variant="default" dark={dark}>
        <span>24</span>
        <span>NOV</span>
      </ButtonSquarred>
      <Main>
        <Title
          as={Link}
          to={`${slug}`}
          dark={dark}
          onMouseEnter={() => setAnimationArrows(aniamtionArrows.play())}
          onMouseLeave={() => setAnimationArrows(aniamtionArrows.reverse(0))}
        >
          {title}
        </Title>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "start",
            gap: 10,
          }}
        >
          <Tag>{tag}</Tag>
          <ReadTime variant="default">
            <span>{minutes}</span> <span>min. read</span>
          </ReadTime>
        </div>
      </Main>
      <ReadMore>
        <div>
          <span
            ref={el => {
              arrow1 = el;
            }}
          >
            {">"}
          </span>
          <span
            ref={el => {
              arrow2 = el;
            }}
          >
            {">"}
          </span>
          <span
            ref={el => {
              arrow3 = el;
            }}
          >
            {">"}
          </span>
        </div>
      </ReadMore>
    </CardItem>
  );
};

PostItem.defaultProps = {
  size: "medium",
  onClick: undefined,
};

export default PostItem;
