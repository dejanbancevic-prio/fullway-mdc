'use client'

import React from "react";
import { motion } from "framer-motion";

const WheelMotion = () => {
  return (
    <motion.div
      initial={{ x: -200, rotate: -45, opacity: 0 }} 
      whileInView={{ x: 0,rotate: 0, opacity: 1 }} 
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        src="./images/HomePage/MostPopularTire/fullway-tire-frontview-w-wheel-template.png"
        alt="Fullway Tire"
        className="size-[433px]"
      />
    </motion.div>
  );
};

export default WheelMotion;
