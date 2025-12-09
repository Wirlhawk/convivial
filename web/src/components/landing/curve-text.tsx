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
        offset: ["start 55%", "end end"],
    });

    useEffect(() => {
        let frameId: number;

        const updateTextPaths = () => {
            if (text1.current && text2.current) {
                const progress = scrollYProgress.get();

                // Path extensions setup:
                // We extended straight lines significantly to delay the curve entry.
                // Left extension: 800 units (from x=-800 to x=0)
                // Curve zone: ~260 units (starts at offset 800)
                // Right extension: 800 units

                // Text 1 moves right to left
                // Start (p=0): Offset 1600 (Far right, on straight path)
                // End (p=1): Offset -100 (Far left, passed 0)
                // Range = 1700. Faster speed.
                const offset1 = 1600 - progress * 1700;
                text1.current.setAttribute("startOffset", `${offset1}`);

                // Text 2 moves left to right
                // Start (p=0): Offset 200 (Far left, on straight path)
                // End (p=1): Offset 1400 (Far right, on straight path)
                // Range = 1200. Slower speed (unchanged).
                const offset2 = 200 + progress * 1200;
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
                        // Extended path: Starts at x=-800, ends at x=1050.
                        // Long straight segment (-800 to 0) ensures text stays flat initially.
                        d="M-800,100 L0,100 c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68 L1050,100"
                    />
                    {/* bottom curve (same shape, lower) */}
                    <path
                        id="curve2"
                        fill="none"
                        // Extended path: Starts at x=-800, ends at x=1050.
                        d="M-800,130 L0,130 c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68 L1050,130"
                    />

                    {/* Text 1 on upper curve */}
                    <text className="text-xs font-bowlby tracking-widest font-light">
                        <textPath href="#curve1" startOffset="1600" ref={text1}>
                            Every noble mission and idea truly matters
                        </textPath>
                    </text>

                    {/* Text 2 on lower curve */}
                    <text className="text-xs font-bowlby tracking-widest font-light">
                        <textPath href="#curve2" startOffset="200" ref={text2}>
                            Let's buddy up and bring them to life!
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}
