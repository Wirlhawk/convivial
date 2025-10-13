"use client";
import React from "react";
import { motion } from "framer-motion";
import ActivitiesCard from "./activities-card";

const activities = [
    {
        title: "THIS IS HEADLINE",
        description:
            "Øredev's program is designed to drive the kinds of serendipitous encounters conducive to creating collaborations, building communities, and establishing friendships! Leave the distractions of your screen behind, get energised by meeting new people and enjoy the diversity of viewpoints and cultures. Get invigorated by the mixing of minds and build long lasting connections.",
        color: "bg-accent",
        image: "/assets/activities/1.png",
    },
    {
        title: "THIS IS HEADLINE",
        description:
            "Øredev's program is designed to drive the kinds of serendipitous encounters conducive to creating collaborations, building communities, and establishing friendships! Leave the distractions of your screen behind, get energised by meeting new people and enjoy the diversity of viewpoints and cultures. Get invigorated by the mixing of minds and build long lasting connections.",
        color: "bg-secondary",
        image: "/assets/ninjas/1.png",
    },
    {
        title: "THIS IS HEADLINE",
        description:
            "Øredev's program is designed to drive the kinds of serendipitous encounters conducive to creating collaborations, building communities, and establishing friendships! Leave the distractions of your screen behind, get energised by meeting new people and enjoy the diversity of viewpoints and cultures. Get invigorated by the mixing of minds and build long lasting connections.",
        color: "bg-accent",
        image: "/assets/activities/1.png",
    },
];

export default function Activites() {
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 gap-20">
            {activities.map((activity, index) => (
                <motion.div
                    key={index}
                    className={`flex items-center gap-8 ${
                        index % 2 === 1 ? "flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ActivitiesCard
                        title={activity.title}
                        description={activity.description}
                        color={activity.color}
                    />
                    <motion.img
                        src={activity.image}
                        alt=""
                        className="w-full max-w-xl "
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}
