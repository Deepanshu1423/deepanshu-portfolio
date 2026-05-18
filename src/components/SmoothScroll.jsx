"use client";

import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        anchors: {
          offset: -90,
          duration: 1,
        },
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;