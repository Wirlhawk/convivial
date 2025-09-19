// components/TextPathScroll.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextPathScroll() {
    const container = useRef<HTMLDivElement>(null);
    const text = useRef<SVGTextPathElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 50%", "end end"],
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            text.current?.setAttribute("startOffset", `${e * 100}%`);
        });
    }, [scrollYProgress]);

    return (
        <div ref={container} className="bg-green-500">
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path
                    id="curve"
                    fill="none"
                    // stroke="black"
                    d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
                />
                <text className="text-[6px] font-bowlby tracking-widest font-light">
                    <textPath href="#curve" startOffset={"0"} ref={text}>
                        Convivial Futures
                    </textPath>
                </text>
            </svg>

            {/* <Logos scrollProgress={scrollYProgress} /> */}
        </div>
    );
}
