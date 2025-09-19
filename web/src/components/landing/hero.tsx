"use client";

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    // LEFT SCROLL
    const { scrollYProgress: leftScroll } = useScroll({
        target: leftRef,
        offset: ["start 75%", "75% start"],
    });

    // stair effect: outer (less), inner (more)
    const left1X = useTransform(leftScroll, [0, 1], [0, -350]); // outer
    const left1Y = useTransform(leftScroll, [0, 1], [0, -40]);

    const left2X = useTransform(leftScroll, [0, 1], [0, -180]); // mid
    const left2Y = useTransform(leftScroll, [0, 1], [0, -70]);

    // RIGHT SCROLL
    const { scrollYProgress: rightScroll } = useScroll({
        target: rightRef,
        offset: ["start 75%", "75% start"],
    });

    const right1X = useTransform(rightScroll, [0, 1], [0, 350]); // outer
    const right1Y = useTransform(rightScroll, [0, 1], [0, -40]);

    const right2X = useTransform(rightScroll, [0, 1], [0, 180]); // mid
    const right2Y = useTransform(rightScroll, [0, 1], [0, 70]);

    return (
        <section className="flex flex-col">
            {/* Hero */}
            <div className="relative flex h-screen justify-center bg-[url('/assets/what-up/background.png')] bg-cover bg-center">
                <div className="absolute top-1/5 max-w-7xl text-center font-bowlby text-primary text-stroke text-stroke-fill-primary">
                    <TextEffect
                        className="text-7xl md:text-8xl"
                        as="h1"
                        preset="slide"
                        delay={0.5}
                    >
                        Convivial Futures
                    </TextEffect>
                    <TextEffect
                        className="text-xl md:text-3xl"
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

            {/* Clouds Section → 2 Cols */}
            <div
                className="relative flex h-[50vh] overflow-hidden "
                id="wth"
            >
                {/* LEFT column */}
                <div ref={leftRef} className="relative flex-1">
                    {/* outer (less movement) */}
                    <motion.img
                        src="/assets/what-up/cloud_4.png"
                        alt=""
                        className="absolute top-8 left-0 sm:left-10 w-[35rem]"
                        style={{ x: left1X, y: left1Y }}
                    />
                    {/* mid */}
                    <motion.img
                        src="/assets/what-up/cloud_3.png"
                        alt=""
                        className="absolute top-20 left-0 sm:left-50 w-[30rem]"
                        style={{ x: left2X, y: left2Y }}
                    />
                </div>

              

                <motion.h1
                    className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bowlby text-primary text-stroke"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.7 }}
                >
                    Scroll Down
                </motion.h1>

                {/* RIGHT column */}
                <div ref={rightRef} className="relative flex-1">
                    {/* outer (less movement) */}
                    <motion.img
                        src="/assets/what-up/cloud_4.png"
                        alt=""
                        className="absolute top-8 right-0 sm:right-10 w-[35rem]"
                        style={{ x: right1X, y: right1Y }}
                    />
                    {/* mid */}
                    <motion.img
                        src="/assets/what-up/cloud_3.png"
                        alt=""
                        className="absolute top-20 right-0 sm:right-50 w-[30rem]"
                        style={{ x: right2X, y: right2Y }}
                    />
                    {/* inner (most sensitive) */}
                </div>
            </div>
        </section>
    );
}
