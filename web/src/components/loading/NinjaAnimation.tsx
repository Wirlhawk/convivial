"use client";

import React from "react";
import { motion } from "framer-motion";

const NinjaAnimation = () => {
    return (
        <div className="flex items-center justify-center h-full w-full relative">
            {/* Portal Effect */}
            <motion.div
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.svg
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    initial={{ scale: 0 }}
                    animate={{
                        scale: [0, 1.5, 1.2],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.6, 1],
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {/* Portal outer ring */}
                    <motion.ellipse
                        cx="150"
                        cy="150"
                        rx="120"
                        ry="120"
                        fill="none"
                        stroke="#FFD600"
                        strokeWidth="8"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            strokeDasharray: ["1, 200", "89, 150", "89, 1"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />

                    {/* Portal inner ring */}
                    <motion.ellipse
                        cx="150"
                        cy="150"
                        rx="90"
                        ry="90"
                        fill="none"
                        stroke="#FFD600"
                        strokeWidth="6"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                            rotate: 360,
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />

                    {/* Portal glow */}
                    <motion.ellipse
                        cx="150"
                        cy="150"
                        rx="60"
                        ry="60"
                        fill="rgba(88, 163, 42, 0.3)"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                </motion.svg>
            </motion.div>

            {/* Ninja Character */}
            <motion.svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: [0.8, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    times: [0, 0.6, 0.8, 1],
                }}
            >
                {/* Ninja body */}
                <motion.path
                    d="M110,50 C145,50 160,85 160,110 C160,145 140,170 110,170 C80,170 60,145 60,110 C60,85 75,50 110,50"
                    fill="#1C1C1E"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                {/* Ninja outfit details */}
                <motion.path
                    d="M90,120 L130,120 L130,160 C130,160 120,165 110,165 C100,165 90,160 90,160 Z"
                    fill="#2C2C2E"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Ninja head */}
                <motion.circle
                    cx="110"
                    cy="75"
                    r="25"
                    fill="#2C2C2E"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                />

                {/* Ninja mask */}
                <motion.rect
                    x="85"
                    y="65"
                    width="50"
                    height="20"
                    rx="5"
                    fill="#FFFFFF"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* Ninja eyes */}
                <motion.ellipse
                    cx="100"
                    cy="75"
                    rx="4"
                    ry="2"
                    fill="#2C2C2E"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                />
                <motion.ellipse
                    cx="120"
                    cy="75"
                    rx="4"
                    ry="2"
                    fill="#2C2C2E"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                />

                {/* Ninja headband */}
                <motion.rect
                    x="85"
                    y="60"
                    width="50"
                    height="8"
                    fill="#E53935"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Headband knot */}
                <motion.path
                    d="M135,64 L145,58 L145,70 Z"
                    fill="#E53935"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                />

                {/* Ninja arm with sword */}
                <motion.path
                    d="M160,110 C160,110 170,100 175,95"
                    stroke="#111"
                    strokeWidth="10"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                />

                {/* Ninja sword */}
                <motion.path
                    d="M175,95 L195,75 M180,90 L185,95"
                    stroke="#D0D0D0"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                />

                {/* Ninja throwing stars */}
                <motion.path
                    d="M70,100 L80,90 L90,100 L80,110 Z"
                    fill="#D0D0D0"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{
                        opacity: 1,
                        rotate: 180,
                        x: [-5, 5, -5],
                    }}
                    transition={{
                        delay: 1,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default NinjaAnimation;
