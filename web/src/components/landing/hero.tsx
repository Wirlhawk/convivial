"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomText from "../custom-text";

export default function Hero() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    // LEFT SCROLL
    const { scrollYProgress: leftScroll } = useScroll({
        target: leftRef,
        offset: ["start 75%", "75% start"],
    });

    // stair effect: outer (less), inner (more)
    const left1X = useTransform(leftScroll, [0, 1], [0, -600]); // outer
    const left1Y = useTransform(leftScroll, [0, 1], [0, -80]);

    const left2X = useTransform(leftScroll, [0, 1], [0, -300]); // mid
    const left2Y = useTransform(leftScroll, [0, 1], [0, -70]);

    const { scrollYProgress: textScroll } = useScroll({
        target: leftRef,
        offset: ["start end", "end start"],
    });

    const textScale = useTransform(textScroll, [0, 1], [1, 1.5]);

    // RIGHT SCROLL
    const { scrollYProgress: rightScroll } = useScroll({
        target: rightRef,
        offset: ["start 75%", "75% start"],
    });

    const right1X = useTransform(rightScroll, [0, 1], [0, 600]); // outer
    const right1Y = useTransform(rightScroll, [0, 1], [0, -80]);

    const right2X = useTransform(rightScroll, [0, 1], [0, 300]); // mid
    const right2Y = useTransform(rightScroll, [0, 1], [0, 70]);

    return (
        <section className="flex flex-col relative">
            {/* Hero */}
            <div className="relative flex h-screen justify-center bg-[url('/assets/wth-bg/1.svg')] bg-cover bg-center">
                <div className="absolute top-1/5 max-w-7xl text-center font-bowlby text-primary font-black  text-stroke text-stroke-red-400">
                    <TextEffect
                        className="text-5xl md:text-8xl mb-2"
                        as="h1"
                        preset="slide"
                        delay={0.5}
                    >
                        Convivial Futures
                    </TextEffect>
                    <TextEffect
                        className="text-lg md:text-3xl"
                        as="h2"
                        preset="slide"
                        delay={0.5}
                    >
                        (Not) a Multidimensional Ninjas' Hideout
                    </TextEffect>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                >
                    <Button
                        className="absolute bottom-15 min-w-60 font-bold -translate-x-1/2 -translate-y-1/2 "
                        size={"lg"}
                        asChild
                    >
                        <a href="#wth">Wth Is This?</a>
                    </Button>
                </motion.div>
            </div>

            <div className="h-screen  relative overflow-clip pb-5 bg-[url('/assets/wth-bg/2.svg')] bg-[size:100%_auto] bg-repeat-y">
                <motion.h1
                    className="sticky top-1/2 z-10 tracking-tighter text-center text-2xl sm:text-4xl font-bowlby text-primary mt-30 text-stroke text-stroke-red-400 "
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                    style={{ scale: textScale }}
                >
                    What Is This
                    <br /> All About?
                </motion.h1>

                {/* LEFT column */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex"
                >
                    <div ref={leftRef} className="relative flex-1">
                        <motion.img
                            src="/assets/what-up/awan1.png"
                            alt=""
                            className="absolute top-8 left-0 sm:left-10 w-[35rem]"
                            style={{ x: left1X, y: left1Y }}
                        />
                        <motion.img
                            src="/assets/what-up/awan2.png"
                            alt=""
                            className="absolute top-10 left-0 sm:left-50 w-[30rem]"
                            style={{ x: left2X, y: left2Y }}
                        />
                    </div>

                    {/* RIGHT column */}
                    <div ref={rightRef} className="relative flex-1">
                        <motion.img
                            src="/assets/what-up/awan1.png"
                            alt=""
                            className="absolute top-8 right-0 sm:right-10 w-[35rem]"
                            style={{ x: right1X, y: right1Y }}
                        />
                        <motion.img
                            src="/assets/what-up/awan2.png"
                            alt=""
                            className="absolute top-10 right-0 sm:right-50 w-[30rem]"
                            style={{ x: right2X, y: right2Y }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
