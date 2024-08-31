// animations.ts
export const bouncingVariant = {
    initial: { x: 0, y: 0 },
    whileTap: {
      x: "-10px",
      y: "10px",
      scale: 1.2,
      transition: { duration: 0.4 },
    },
  };
  
  export const itemVariants = {
    open: {
      y: 0,
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  
  export const navVariants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 3,
          delayChildren: 0.3,
          staggerChildren: 0.15,
        },
      },
      closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.7,
        },
      },
  };
  
  export const buttonTapVariant = {
    y: -10,
    rotate: 360,
    scale: 1.1,
    transition: { duration: 0.2, damping: 10, stiffness: 200 },
  };
  