"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextGenerate = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration || 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-[#F9F7F1] text-[#164F90] opacity-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",  // 🔹 Bolder font
              fontSize: "50px",
              lineHeight: "82.3px",
              letterSpacing: "-3.0px",
              filter: filter ? "blur(10px)" : "none",
            }}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-inter", className)}>
      <div className="mt-[5px] ml-[-100] mr-10"> {/* 🔹 Added margin-left */}
        <div className="dark:text-[#F9F7F1] text-[#164F90]">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
