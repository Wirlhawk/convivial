"use client";
import { motion, Variants } from "motion/react";
import CustomParagraph from "../custom-paragraph";
import { useAboutContent } from "@/hooks";

export default function About() {
    const { data: aboutItems, isLoading } = useAboutContent();

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5,
                duration: 3,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95, rotate: 3 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    if (isLoading) {
        return (
            <section className="min-h-screen pb-20 px-10 mx-auto flex flex-col justify-center overflow-hidden gap-10 bg-[url('/assets/wth-bg/wth-body.png')] bg-[size:100%_auto] bg-repeat-y" />
        );
    }

    if (!aboutItems || aboutItems.length === 0) {
        return null;
    }

    return (
        <section className="min-h-screen pb-20 px-10 mx-auto flex flex-col justify-center overflow-hidden gap-10 bg-[url('/assets/wth-bg/wth-body.png')] bg-[size:100%_auto] bg-repeat-y ">
            {aboutItems.map((aboutItem, index) => {
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                        key={aboutItem.id}
                        className={`flex w-full max-w-7xl mx-auto gap-5 lg:gap-10 items-center ${
                            isEven
                                ? "flex-col-reverse lg:flex-row"
                                : "flex-col-reverse lg:flex-row-reverse"
                        }`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5, once: true }}
                    >
                        <motion.div variants={item} className="space-y-2">
                            <CustomParagraph
                                text={aboutItem.description}
                                className="text-3xl sm:text-2xl tracking-wide leading-relaxed"
                            />
                        </motion.div>

                        {aboutItem.image.url && (
                            <motion.img
                                width={400}
                                height={400}
                                alt=""
                                src={aboutItem.image.url}
                                variants={item}
                                className={`aspect-square object-cover mx-auto lg:ml-auto h-fit max-w-96 ${
                                    isEven ? "animate-float" : ""
                                }`}
                            />
                        )}
                    </motion.div>
                );
            })}
        </section>
    );
}