"use client";

import React from "react";
import TeamCard from "@/components/the-ninjas/team-card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTeam } from "@/hooks";

// Team members data
export const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Founder & CEO",
        avatar: "/assets/ninjas/1.png",
        bio: "Passionate about creating innovative solutions that make a difference.",
    },
    {
        name: "Sarah Chen",
        role: "Lead Developer",
        avatar: "/assets/ninjas/2.png",
        bio: "Full-stack developer with expertise in React and Node.js.",
    },
    {
        name: "Michael Rodriguez",
        role: "UX Designer",
        avatar: "/assets/ninjas/2.png",
        bio: "Creating beautiful and intuitive user experiences is my passion.",
    },
    {
        name: "Priya Patel",
        role: "Marketing Director",
        avatar: "/assets/ninjas/1.png",
        bio: "Strategic marketer with a focus on growth and brand development.",
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export function Teams() {
    const { data: teams } = useTeam();

    console.log("teams", teams);
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {teams?.map((member, index) => (
                // <motion.div
                //     key={index}
                //     variants={cardVariants}
                //     className="w-full"
                // >
                <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    avatar={member.avatar.url!}
                    bio={member.bio}
                />
                // </motion.div>
            ))}
        </motion.div>
    );
}
