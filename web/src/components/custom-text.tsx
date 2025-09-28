"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const bezier: [number, number, number, number] = [0.165, 0.84, 0.44, 1];

// Parent: controls when to start and staggers children
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0 },
    },
};

// Child: simple up-from-below animation using em units (safer than 100%)
const childVariants: Variants = {
    hidden: { y: "1.1em", opacity: 0 },
    visible: {
        y: "0em",
        opacity: 1,
        transition: {
            duration: 1.1,
            ease: bezier,
        },
    },
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
    const words = text.split(" ");

    return (
        <motion.h3
            className={`flex flex-wrap gap-x-2 leading-tight ${
                className ?? ""
            }`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }} // trigger when ~60% visible
        >
            {words.map((word, i) => (
                // wrapper provides the clipping area for each word
                <span key={i} className="inline-block overflow-hidden">
                    {/* child inherits parent's animate because it has variants but no own initial/animate */}
                    <motion.span
                        variants={childVariants}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.h3>
    );
}
