"use client";

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // delay between each span
        },
        
    },
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className=" grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-6 ">
            {/* Left */}
            <div className="flex items-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bowlby leading-tight"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span
                        variants={item}
                        className="block text-destructive underline text-6xl md:text-6xl"
                    >
                        COLLAB-
                    </motion.span>
                    <motion.span
                        variants={item}
                        className="block text-primary text-5xl md:text-7xl"
                    >
                        ORATE 
                    </motion.span>
                    <motion.span
                        variants={item}
                        className="block text-secondary underline text-6xl md:text-8xl"
                    >
                        WITH US
                    </motion.span>
                </motion.h1>
            </div>

            {/* Right */}
            <div className="flex items-center justify-end mt-10 md:mt-0">
                <motion.h1
                    className="text-4xl md:text-6xl font-bowlby leading-loose text-right"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span
                        variants={item}
                        className="block text-accent text-4xl md:text-6xl"
                    >
                        Join
                    </motion.span>
                    <motion.span
                        variants={item}
                        className="block text-primary underline text-5xl md:text-7xl"
                    >
                        Us Here
                    </motion.span>
                    <motion.span
                        variants={item}
                        className="block text-secondary text-5xl md:text-7xl"
                    >
                        
                    </motion.span>
                </motion.h1>
            </div>
        </section>
    );
}
