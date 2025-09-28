"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerTextProps {
    children: string;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    stagger?: number;
    duration?: number;
    vertical?: boolean; // <-- new prop
}

export default function StaggerText({
    children,
    as: Tag = "h1",
    className,
    stagger = 0.15,
    duration = 0.4,
    vertical = false,
}: StaggerTextProps) {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: stagger },
        },
    };

    const item: Variants = {
        hidden: { y: 100, opacity: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            className="overflow-hidden"
        >
            <Tag
                className={cn(
                    vertical ? "flex flex-col gap-3" : "flex flex-wrap gap-3",
                    "font-bold overflow-hidden",
                    className
                )}
            >
                {children.split(" ").map((word, i) => (
                    <motion.span
                        key={i}
                        variants={item}
                        className="block overflow-hidden"
                    >
                        {word}
                    </motion.span>
                ))}
            </Tag>
        </motion.div>
    );
}
