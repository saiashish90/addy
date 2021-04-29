import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
export default function FadeIn({ className, children }) {
  const variant = {
    visible: { opacity: 1, transition: { delay: 0.1, duration: 0.6 } },
    hidden: { opacity: 0, transition: { delay: 0.1, duration: 0.6 } },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variant}>
      {children}
    </motion.div>
  );
}
