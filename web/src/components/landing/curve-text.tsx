// components/TextPathScroll.tsx
"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextPathScroll() {
  const container = useRef<HTMLDivElement>(null);
  const text = useRef<SVGTextPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "50% start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      const offset = -100 + e * 200; // maps 0→-100, 1→100
      text.current?.setAttribute("startOffset", `${offset}%`);
    });
  }, [scrollYProgress]);

  return (
    <div ref={container} className="h-[200vh] aboslute" >
    <div className="flex justify-center items-center sticky top-1/2 -translate-y-1/2">
      <svg className="w-full pt-30" viewBox="0 0 250 90">
        <path
        id="curve"
        fill="none"
        // stroke="black"
        d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-sm font-bowlby tracking-widest font-light">
        <textPath href="#curve" startOffset={"-100"} ref={text}>
          Convivial Futures
        </textPath>
        </text>
      </svg>
    </div>
    

      {/* <Logos scrollProgress={scrollYProgress} /> */}
    </div>
  );
}
