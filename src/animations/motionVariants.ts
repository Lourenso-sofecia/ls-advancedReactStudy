import { Variants, Transition } from "framer-motion";

// Transições padronizadas
const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.42, 0, 0.58, 1], // easeInOut
};

export const fadeSlideIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.35,
    ease: [0.42, 0, 0.58, 1], // curva semelhante ao easeInOut
  },
};


export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: defaultTransition },
  exit: { opacity: 0, transition: defaultTransition },
};

export const fadeSlideUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: defaultTransition },
  exit: { opacity: 0, y: -24, transition: defaultTransition },
};

export const fadeSlideLeft: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: defaultTransition },
  exit: { opacity: 0, x: -40, transition: defaultTransition },
};

export const zoomIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: defaultTransition },
  exit: { opacity: 0, scale: 0.95, transition: defaultTransition },
};

export const staggerContainer = (staggerChildren = 0.15): Variants => ({
  animate: {
    transition: {
      staggerChildren,
    },
  },
});

export const fadeStaggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};
