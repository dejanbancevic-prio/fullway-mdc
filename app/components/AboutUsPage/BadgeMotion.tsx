"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BadgeMotion = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    >
      <Image
        src="/images/AboutUsPage/AboutFactory/Certified-Badge-Transparent 1.svg"
        alt="Fullway Badge"
        width={1920}
        height={1080}
        className="size-[13.625rem] "
      />
    </motion.div>
  );
};

export default BadgeMotion;
