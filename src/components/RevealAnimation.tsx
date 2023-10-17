"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  yHidden?: number;
  yVisible?: number;
  xHidden?: number;
  xVisible?: number;
  scaleHidden?: number;
  scaleVisible?: number;
}

export const RevealAnimation = ({
  children,
  yHidden = 0,
  yVisible = 0,
  xHidden = 0,
  xVisible = 0,
  scaleHidden = 1,
  scaleVisible = 1,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yHidden, x: xHidden, scale: scaleHidden },
          visible: {
            opacity: 1,
            y: yVisible,
            x: xVisible,
            scale: scaleVisible,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
