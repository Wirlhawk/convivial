"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import CustomParagraph from "../custom-paragraph";
export default function About() {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5, // spacing between children
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

    return (
        <section className="min-h-screen py-20 px-10 mx-auto flex flex-col justify-center overflow-hidden gap-10 bg-[url('/assets/wth-bg/3.svg')] bg-[size:100%_auto] bg-repeat-y ">
            <motion.div
                className="flex w-full max-w-7xl mx-auto gap-10 lg:gap-20 flex-col-reverse lg:flex-row overflow items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >
                <motion.div variants={item} className="space-y-2">
                    <CustomParagraph
                        text="Convivial Futures is an institution engaged in thinking, designing, and complex problem solving to address present and futures challenges. Its focus is on the macro level —society and civilization—especially on methodological and praxeological approaches that enhance human and ecological flourishing. "
                        className="text-lg sm:text-xl font-semibold tracking-wide leading-relaxed text-justify"
                    />
                </motion.div>

                <motion.img
                    width={300}
                    height={300}
                    alt=""
                    src={"/assets/ninjas/1.png"}
                    variants={item}
                    className="aspect-square object-cover border-2 rounded-lg mx-auto lg:ml-auto bg-primary h-fit max-w-72"
                />
            </motion.div>

            <motion.div
                className="flex w-full max-w-7xl mx-auto gap-10 lg:gap-20 flex-col-reverse lg:flex-row-reverse overflow items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >
                <motion.div variants={item} className="space-y-2">
                    <CustomParagraph
                        text="We value interdisciplinarity, where collective knowledge across disciplines forms our foundation, primarily through the fusion of Science, Technology, and Society (STS), Futures Studies, Transformative Design, and Development Studies (i.e., decoloniality). That is why ‘multidimensional ninjas’ exist ! ;-)"
                        className="text-lg sm:text-xl font-semibold tracking-wide leading-relaxed text-justify"
                    />
                </motion.div>

                <motion.img
                    width={300}
                    height={300}
                    alt=""
                    src={"/assets/ninjas/2.png"}
                    variants={item}
                    className="aspect-square object-cover border-2 rounded-lg mx-auto lg:ml-auto bg-accent h-fit max-w-72"
                />
            </motion.div>
        </section>
    );
}


/* 

*/