import React from "react";
import styled from "styled-components";

export const RegVideo = () => {
  return (
    <RegVideoWrapper>
      <video controls autoPlay muted loop>
        <source src="" type="video/mp4" />
      </video>
    </RegVideoWrapper>
  );
};

export const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  );
};

const RegVideoWrapper = styled.div`
  max-width: 675px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const IframeVideoWrapper = styled.div`
  max-width: 675px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

Video.defaultProps = {
  //must be embeded
  src: "https://www.youtube.com/",
  title: "the best html css tutorial ever !",
};
