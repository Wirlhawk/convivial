"use client";
import { motion, Variants } from "motion/react";
import  CustomText  from '../custom-text'
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
        <section className="min-h-screen py-20 px-10 max-w-7xl mx-auto flex  justify-center overflow-hidden ">
            <motion.div
                className="flex w-full gap-10 lg:gap-20 flex-col-reverse lg:flex-row overflow"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >
                <motion.div variants={item} className="space-y-2">
                    {/* <motion.h1
                        variants={item}
                        className="text-xl sm:text-4xl tracking-wide font-bowlby"
                    >
                        Some Title, A Bit of
                    </motion.h1> */}
                    {/* <motion.p
                        variants={item}
                        className="text-lg sm:text-xl font-semibold tracking-wide leading-relaxed text-justify"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat sunt quo inventore laboriosam consectetur,
                        eveniet repudiandae asperiores, ducimus adipisci ipsum
                        accusantium, tempora facere ratione corrupti totam id
                        ipsam! Ea, numquam! Quod eveniet corrupti praesentium
                        eius repellendus? Cum modi, expedita beatae laboriosam
                        non officiis totam maxime provident nostrum praesentium
                        sed doloremque quaerat delectus ratione tenetur incidunt
                        nam tempora asperiores quis ea.
                    </motion.p> */}
                    <CustomParagraph
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat sunt quo inventore laboriosam consectetur,
                        eveniet repudiandae asperiores, ducimus adipisci ipsum
                        accusantium, tempora facere ratione corrupti totam id
                        ipsam! Ea, numquam! Quod eveniet corrupti praesentium
                        eius repellendus? Cum modi, expedita beatae laboriosam
                        non officiis totam maxime provident nostrum praesentium
                        sed doloremque quaerat delectus ratione tenetur incidunt
                        nam tempora asperiores quis ea."
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
        </section>
    );
}
