"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WheelMotion = () => {
  return (
    <motion.div
      initial={{ x: -200, rotate: -45, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src="/images/HomePage/MostPopularTire/fullway-tire-frontview-w-wheel-template.png"
        alt="Fullway Tire"
        width={1920}
        height={1080}
        className="size-[21.4375rem] md:size-[27.0625rem] mt-[2.5rem] md:p-0"
      />
    </motion.div>
  );
};

export default WheelMotion;
