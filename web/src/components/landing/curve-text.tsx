// components/TextPathScroll.tsx
"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextPathScroll() {
    const container = useRef<HTMLDivElement>(null);
    const text1 = useRef<SVGTextPathElement>(null);
    const text2 = useRef<SVGTextPathElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "50% start"],
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            // Text 1 moves left to right (-100 → 100)
            const offset1 = -100 + e * 200;
            text1.current?.setAttribute("startOffset", `${offset1}%`);

            // Text 2 moves right to left (100 → 0)
            const offset2 = 100 - e * 200;
            text2.current?.setAttribute("startOffset", `${offset2}%`);
        });
    }, [scrollYProgress]);
    
    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="flex justify-center items-center sticky top-1/2 -translate-y-1/2">
                <svg className="w-full pt-30" viewBox="0 0 250 150">
                    {/* top curve */}
                    <path
                        id="curve1"
                        fill="none"
                        d="m0,100c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
                    />
                    {/* bottom curve (same shape, lower) */}
                    <path
                        id="curve2"
                        fill="none"
                        d="m0,140c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
                    />

                    {/* Text 1 on upper curve */}
                    <text className="text-sm font-bowlby tracking-widest font-light">
                        <textPath href="#curve1" startOffset="-100" ref={text1}>
                            Convivial Futures
                        </textPath>
                    </text>

                    {/* Text 2 on lower curve */}
                    <text className="text-sm font-bowlby tracking-widest font-light">
                        <textPath href="#curve2" startOffset="100" ref={text2}>
                            Convivial Futures
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}
