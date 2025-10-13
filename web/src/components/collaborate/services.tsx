"use client";
import React from "react";
import ServiceCard from "./service-card";
import { motion } from "framer-motion";
import { useServices } from "@/hooks";

// Sample service data - you can replace with your actual data
const services = [
    {
        id: 1,
        title: "Service 1",
        description: "Service description 1",
        image: "/assets/ninjas/1.png",
    },
    {
        id: 2,
        title: "Service 2",
        description: "Service description 2",
        image: "/assets/ninjas/1.png",
    },
    {
        id: 3,
        title: "Service 3",
        description: "Service description 3",
        image: "/assets/ninjas/1.png",
    },
    {
        id: 4,
        title: "Service 4",
        description: "Service description 4",
        image: "/assets/ninjas/1.png",
    },
    {
        id: 5,
        title: "Service 5",
        description: "Service description 5",
        image: "/assets/ninjas/1.png",
    },
];

export default function Services() {
    const { data: services } = useServices();
    return (
        <div className="max-w-7xl mx-auto py-20 px-6">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-10 px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {services?.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className={`mx-auto md:mx-0 ${
                            index % 2 === 1
                                ? "md:mt-16 md:justify-self-end"
                                : "md:justify-self-start"
                        }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            image={service.image.url!}
                            backgroundColor={index % 2 === 1 ? "bg-accent" : "bg-secondary"}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
