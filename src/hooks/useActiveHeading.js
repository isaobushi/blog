import { useState, useEffect } from "react";

export const useActiveHeading = headings => {
  const [activeHeadingId, setActiveHeading] = useState(null);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(null, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(null, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      let headingBoxes = headings.map(({ id }) => {
        const elem = document.querySelector(`${id}`);
        return { id, box: elem.getBoundingClientRect() };
      });

      const TOP_OFFSET = 10;
      let firstHeadingInViewport = headingBoxes.find(({ box }) => {
        return box.bottom > TOP_OFFSET && box.top < window.innerHeight;
      });

      if (!firstHeadingInViewport) {
        const reversedBoxes = [...headingBoxes].reverse();

        firstHeadingInViewport = reversedBoxes.find(({ box }) => {
          return box.bottom < TOP_OFFSET;
        });
      }

      if (!firstHeadingInViewport) {
        setActiveHeading(null);
      } else if (firstHeadingInViewport.id !== activeHeadingId) {
        setActiveHeading(firstHeadingInViewport.id);
      }
    }, 300);

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeHeadingId, headings]);

  return activeHeadingId;
};
