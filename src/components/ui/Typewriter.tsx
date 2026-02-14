"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string | string[];
    speed?: number;
    delay?: number;
    className?: string;
    cursorClassName?: string;
    loop?: boolean;
    deleteSpeed?: number;
    pauseBeforeDelete?: number;
}

export function Typewriter({
    text,
    speed = 0.05,
    delay = 0,
    className = "",
    cursorClassName = "",
    loop = true,
    deleteSpeed = 0.03,
    pauseBeforeDelete = 2000
}: TypewriterProps) {
    const textIndex = useMotionValue(0);
    const Texts = Array.isArray(text) ? text : [text];
    const [currentTextDisplay, setCurrentTextDisplay] = useState(Texts[0]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        let controls: any;

        const startAnimation = async () => {
            if (currentTextIndex >= Texts.length && !loop) return;

            const index = currentTextIndex % Texts.length;
            const currentString = Texts[index];

            // Type out
            controls = animate(textIndex, currentString.length, {
                type: "tween",
                duration: currentString.length * speed,
                delay: delay,
                onUpdate: (latest) => {
                    setCurrentTextDisplay(currentString.slice(0, Math.round(latest)));
                },
                onComplete: async () => {
                    if (loop) {
                        await new Promise(resolve => setTimeout(resolve, pauseBeforeDelete));
                        // Delete
                        controls = animate(textIndex, 0, {
                            type: "tween",
                            duration: currentString.length * deleteSpeed,
                            onUpdate: (latest) => {
                                setCurrentTextDisplay(currentString.slice(0, Math.round(latest)));
                            },
                            onComplete: () => {
                                setCurrentTextIndex(prev => prev + 1);
                                textIndex.set(0);
                            }
                        });
                    }
                }
            });
        };

        startAnimation();

        return () => controls?.stop();
    }, [currentTextIndex, loop, speed, deleteSpeed, pauseBeforeDelete, delay, Texts, textIndex]);

    return (
        <span className={className}>
            {currentTextDisplay}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
}
