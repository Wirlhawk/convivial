"use client";

import React, { useState, useMemo } from "react";
import TeamCard from "@/components/the-ninjas/team-card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTeam } from "@/hooks";
import { Button } from "@/components/ui/button";

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
    const [selectedRole, setSelectedRole] = useState<string>("all");

    // Get unique roles from team data
    const uniqueRoles = useMemo(() => {
        if (!teams) return [];
        const roles = teams.map(member => member.role);
        return [...new Set(roles)].sort();
    }, [teams]);

    // Create role categories with "All Roles" first, then individual roles
    const roleCategories = useMemo(() => {
        const categories = [{ value: "all", label: "All Roles" }];
        uniqueRoles.forEach(role => {
            categories.push({ value: role, label: role });
        });
        return categories;
    }, [uniqueRoles]);

    // Filter teams based on selected role
    const filteredTeams = useMemo(() => {
        if (!teams) return [];
        
        if (selectedRole === "all") {
            return teams;
        }

        return teams.filter((member) => member.role === selectedRole);
    }, [teams, selectedRole]);

    console.log("teams", teams);
    console.log("unique roles", uniqueRoles);
    console.log("filtered teams", filteredTeams);

    return (
        <div className="space-y-8">
            {/* Role Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {roleCategories.map((category) => (
                    <Button
                        key={category.value}
                        onClick={() => setSelectedRole(category.value)}
                        variant={selectedRole === category.value ? "default" : "outline"}
                        size="sm"
                        className="min-w-[100px]"
                    >
                        {category.label}
                    </Button>
                ))}
            </div>

            {/* Team Members Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {filteredTeams.map((member) => (
                    <TeamCard
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        avatar={member.avatar.url!}
                        bio={member.bio}
                    />
                ))}
            </motion.div>

            {/* No results message */}
            {filteredTeams.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        No team members found for the selected role category.
                    </p>
                </div>
            )}
        </div>
    );
}
