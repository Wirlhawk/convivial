"use client";
import Image from "next/image";
import React from "react";
import { InView } from "../ui/in-view";
import { motion } from "motion/react";

export default function About() {
    return (
        <section className="h-screen px-10 max-w-7xl mx-auto flex items-center justify-center">
            <motion.div
                className="flex w-full gap-10 lg:gap-20 flex-col-reverse lg:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
            >
                <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl tracking-wide font-bowlby">
                        Some Title, A Bit of
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold tracking-wide leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat sunt quo inventore laboriosam consectetur,
                        eveniet repudiandae asperiores, ducimus adipisci ipsum
                        accusantium, tempora facere ratione corrupti totam id
                        ipsam! Ea, numquam! Quod eveniet corrupti praesentium
                        eius repellendus? Cum modi, expedita beatae laboriosam
                        non officiis totam maxime provident nostrum praesentium
                        sed doloremque quaerat delectus ratione tenetur incidunt
                        nam tempora asperiores quis ea.
                    </p>
                </div>

                <Image
                    width={300}
                    height={300}
                    alt=""
                    src={"/assets/ninjas/1.png"}
                    className="aspect-square object-cover border-2 rounded-lg mx-auto lg:ml-auto bg-primary w-full max-w-72"
                />
            </motion.div>
        </section>
    );
}
