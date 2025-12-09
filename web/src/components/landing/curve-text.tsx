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
        offset: ["start 55%", "end end"], // The animation starts when the top of the target element is halfway down the viewport, and ends when the bottom of the target element reaches the top of the viewport.
    });

    useEffect(() => {
        let frameId: number;

        const updateTextPaths = () => {
            if (text1.current && text2.current) {
                const progress = scrollYProgress.get();

                // Path extensions setup:
                // Original curve: approx 0 to 250 (width 250)
                // New path: starts at -200, ends at 450 (width ~650)
                // "Visible" start (0) is at 200 units along the path
                // "Visible" end (250) is at 450 units along the path

                // Text 1 moves right to left
                // Goal: P=0 -> Right Edge (450), P=1 -> Left Edge (-50)
                // Formula: 450 - progress * 500
                const offset1 = 450 - progress * 500;
                text1.current.setAttribute("startOffset", `${offset1}`);

                // Text 2 moves left to right
                // Goal: P=0 -> Left Edge (-50), P=1 -> Right Edge (450)
                // Formula: -50 + progress * 500
                const offset2 = -50 + progress * 500;
                text2.current.setAttribute("startOffset", `${offset2}`);
            }

            frameId = requestAnimationFrame(updateTextPaths);
        };

        frameId = requestAnimationFrame(updateTextPaths);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [scrollYProgress]);

    return (
        <div
            ref={container}
            className="h-[300vh] relative pt-[40vh] bg-[url('/assets/wth-bg/3.svg')] bg-[size:100%_auto] bg-repeat-y"
        >
            <div className="flex justify-center items-center sticky top-1/2 -translate-y-1/2 text-primary ">
                <svg className="w-full pt-30" viewBox="0 0 250 150">
                    {/* top curve */}
                    <path
                        id="curve1"
                        fill="none"
                        // The '100' in 'm0,100' controls the starting Y position of the top curve.
                        // Adjust this value to move the entire curve (and text) up or down.
                        // Extended with straight lines: M-200,100 L0,100 ... L450,100
                        d="M-200,100 L0,100 c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68 L450,100"
                    />
                    {/* bottom curve (same shape, lower) */}
                    <path
                        id="curve2"
                        fill="none"
                        // The '140' in 'm0,140' controls the starting Y position of the bottom curve.
                        // Adjust this value to move the entire curve (and text) up or down.
                        // Extended with straight lines: M-200,130 L0,130 ... L450,130
                        d="M-200,130 L0,130 c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68 L450,130"
                    />

                    {/* Text 1 on upper curve */}
                    <text className="text-xs font-bowlby tracking-widest font-light">
                        <textPath href="#curve1" startOffset="450" ref={text1}>
                            Every noble mission and idea truly matters
                        </textPath>
                    </text>

                    {/* Text 2 on lower curve */}
                    <text className="text-xs font-bowlby tracking-widest font-light">
                        <textPath href="#curve2" startOffset="-50" ref={text2}>
                            Let's buddy up and bring them to life!
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}
