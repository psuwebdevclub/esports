import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CountUpNumber = ({
  endValue,
  duration = 1,
  prefix = "",
  suffix = "",
}) => {
  const numberRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        setCurrentValue(currentValue);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    ScrollTrigger.create({
      trigger: numberRef.current,
      start: "top bottom-=100",
      onEnter: () => animateValue(0, endValue, duration * 1000),
      once: true,
    });
  }, [endValue, duration]);

  return (
    <span ref={numberRef}>
      {prefix}
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CountUpNumber;
