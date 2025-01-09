"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  return (
    <motion.span ref={scope} className="inline-block">
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0 inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};