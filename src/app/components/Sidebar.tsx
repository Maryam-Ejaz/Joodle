"use client";

import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import Goo from 'gooey-react'
import "./Sidebar.scss";

const bouncingVariant = {
  initial: { x: 0, y: 0 },
  whileTap: {
    x: "-10px", // Moves to the left
    y: "10px", // Moves to the bottom
    scale: 1.2, // Bouncing effect with scaling
    transition: { duration: 0.4 },
  },
};

const itemVariants = {
  open: {
    // opacity: 1,
    y: 0,
    // transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("This is a note.");
  const router = useRouter();

  async function createNote(color: any) {
    console.log("create note");
    const pb = new PocketBase("https://pocketbase-production-782d.up.railway.app/");

    // Example create data
    const data = {
      content: content,
      color: color,
    };
    await pb.collection("notes").create(data);

    // Reset title and content
    setContent("This is a note.");
    router.refresh();
    setIsOpen(!isOpen);
  }

  return (
    <div className="border-r border-gray-300 top-0 left-0 h-screen w-24 m-0 flex flex-col">
      <p className="text-center pt-4 pb-12 font-extrabold text-black">Joodle</p>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="menu-nav" id="goo">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
        <motion.button
          whileTap={{
            y: -10, // Move up 10 pixels
            rotate: 360, // Rotate 360 degrees
            scale: 1.1,
            transition: { duration: 0.2, damping: 10, stiffness: 200 }, // Add bounciness
          }}
          className="sidebar-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsPlus size="36" />
        </motion.button>

        <motion.ul
          variants={{
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
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className={`pt-6 pb-6 text-center blobs ${isOpen ? 'animate' : ''}`}
        >

<motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => createNote('bg-yellow-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-1' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-yellow-400 cursor-pointer gooey-item"
            >
        
          </motion.li>
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => createNote('bg-green-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-2' : ''}`}
          >
            <motion.li
              className="sidebar-color bg-green-400 cursor-pointer gooey-item z-index-[-5]"
            ></motion.li>
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => createNote('bg-blue-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-3' : ''}`}
          >
            <motion.li
              className="sidebar-color bg-blue-400 cursor-pointer gooey-item z-index-[-6]"
            ></motion.li>
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => createNote('bg-orange-400')}
            className={`gooey-container ${isOpen? 'animate animate-item-4' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-orange-400 cursor-pointer gooey-item z-index-[-100]"
            ></motion.li>
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => createNote('bg-red-300')}
            className={`gooey-container ${isOpen? 'animate animate-item-5' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-red-300 cursor-pointer gooey-item z-index-[-100]"
            ></motion.li>
          </motion.div>

        
        </motion.ul>

      </motion.nav>
    </div>
  );
}
