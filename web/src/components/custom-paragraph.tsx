"use client";
import { motion, Variants } from "framer-motion";

type CustomParagraphProps = {
    text: string;
    className?: string;
};

export default function CustomParagraph({
    text,
    className,
}: CustomParagraphProps) {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.01,
                delayChildren: 0,
            },
        },
    };

    const child: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: [0.165, 0.84, 0.44, 1],
            },
        },
    };

    return (
        <div className="relative">
            {/* Animated split text */}
            <motion.p
                className={`overflow-hidden flex flex-wrap relative z-10 ${className}`}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, i) => (
                    <span key={i} className="mr-2 flex overflow-hidden">
                        {word.split("").map((char, j) => (
                            <motion.span
                                key={j}
                                className="inline-block"
                                variants={child}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.p>

            {/* Static base text (behind) */}
            <p
                className={`absolute top-0 left-0 opacity-0 translate-y-full ${className}`}
                style={{
                    transitionProperty: "transform, opacity",
                    transitionTimingFunction:
                        "cubic-bezier(0.165, 0.84, 0.44, 1), ease",
                    transitionDuration: "1.1s, 1.21s",
                    transitionDelay: "0.28s",
                }}
                aria-hidden="true" // hide from screen readers
            >
                {text}
            </p>
        </div>
    );
}
