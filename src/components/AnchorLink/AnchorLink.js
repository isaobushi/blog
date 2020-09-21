import React, { useState, useEffect } from "react";
import { ContainerAnchor, CopySvg, LinkTitle } from "./AnchorLinkStyled";

const AnchorLink = ({ hash, children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    typeof window !== undefined ? setUrl(window.location.href) : "";
  }, []);

  const handleCopy = () => {
    console.log("copied");
    navigator.clipboard.writeText(`${url}/#${hash}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };
  return (
    <>
      <ContainerAnchor>
        <CopySvg as="a">
          <svg viewBox="0 0 469.898 469.898" onClick={() => handleCopy()}>
            <def>
              <filter id="shadow">
                <feDropShadow
                  dx="1"
                  dy="1"
                  stdDeviation="10"
                  floodColor="orangered"
                />
              </filter>
            </def>
            <path d="M242.636 360.566l-66.81 66.81c-17.781 17.781-41.422 27.573-66.568 27.573s-48.788-9.792-66.568-27.573c-36.706-36.706-36.706-96.43 0-133.136l125.775-125.775c17.781-17.781 41.422-27.573 66.568-27.573s48.787 9.792 66.568 27.573a94.265 94.265 0 0122.772 36.861l-59.524 59.524c-8.009 8.009-18.658 12.42-29.984 12.42s-21.976-4.411-29.985-12.42a42.02 42.02 0 01-9.295-14.011 7.5 7.5 0 10-13.904 5.628 56.938 56.938 0 0012.593 18.989c10.843 10.842 25.259 16.813 40.592 16.813s29.749-5.971 40.591-16.813L401.23 149.682c10.843-10.842 16.814-25.258 16.814-40.591S412.073 79.342 401.23 68.5c-10.842-10.842-25.257-16.813-40.591-16.813-15.333 0-29.749 5.971-40.591 16.813l-39.713 39.713a7.5 7.5 0 000 10.606 7.5 7.5 0 0010.606 0l39.713-39.713c8.009-8.009 18.658-12.42 29.984-12.42s21.976 4.411 29.984 12.419c8.009 8.01 12.42 18.658 12.42 29.985s-4.411 21.975-12.42 29.985l-54.589 54.589a109.432 109.432 0 00-23.828-35.805c-42.554-42.555-111.795-42.555-154.349 0L32.084 283.634c-42.554 42.554-42.554 111.794 0 154.349 21.277 21.277 49.226 31.916 77.174 31.916 27.949 0 55.898-10.638 77.175-31.916l66.81-66.81a7.5 7.5 0 000-10.606 7.5 7.5 0 00-10.607-.001z" />
            <path d="M437.814 31.916c-42.554-42.555-111.796-42.554-154.349 0L216.572 98.81a7.5 7.5 0 000 10.606 7.5 7.5 0 0010.606 0l66.894-66.894c36.707-36.706 96.431-36.706 133.136 0 36.706 36.706 36.706 96.43 0 133.136L301.433 301.433c-17.781 17.781-41.422 27.573-66.568 27.573s-48.787-9.792-66.568-27.573a94.26 94.26 0 01-22.772-36.861l59.523-59.523c8.009-8.009 18.658-12.42 29.984-12.42s21.975 4.411 29.985 12.42a41.994 41.994 0 019.296 14.01 7.5 7.5 0 0013.904-5.628 56.926 56.926 0 00-12.594-18.989c-10.843-10.842-25.258-16.813-40.591-16.813s-29.749 5.971-40.591 16.813l-61.31 61.31a7.467 7.467 0 00-2.634 2.634l-61.83 61.83c-10.843 10.842-16.814 25.258-16.814 40.591s5.971 29.749 16.814 40.591c10.842 10.842 25.257 16.813 40.59 16.813 15.333 0 29.749-5.971 40.591-16.813l39.655-39.655a7.5 7.5 0 000-10.606 7.5 7.5 0 00-10.606 0l-39.655 39.655c-8.009 8.009-18.658 12.42-29.985 12.42s-21.975-4.411-29.984-12.419c-8.009-8.01-12.42-18.658-12.42-29.985s4.411-21.975 12.42-29.985l54.588-54.588a109.432 109.432 0 0023.828 35.805c20.614 20.614 48.022 31.967 77.174 31.967 29.153 0 56.561-11.353 77.174-31.967l125.775-125.775c42.556-42.555 42.556-111.795.002-154.349z" />
          </svg>
          <span>{isCopied ? `Copied!` : `Copy URL`}</span>
        </CopySvg>
        <LinkTitle id={hash}>{children}</LinkTitle>
      </ContainerAnchor>
    </>
  );
};

export { AnchorLink };