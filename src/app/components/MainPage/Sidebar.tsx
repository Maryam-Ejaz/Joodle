"use client";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNote } from "../../../services/noteService";
import ThemeToggleButton from "./../Buttons/ThemeToggleButton";
import "./Sidebar.scss";

// Import animations
import { bouncingVariant, itemVariants, navVariants, buttonTapVariant } from "./../Animations/sliderAnimations";
import { animateGooeyToCard } from "./../Animations/morphAnimation";

export default function Sidebar({ refreshNotes, onAddNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("This is a note.");
  const [title, setTitle] = useState("Topic");

  async function handleCreateNote(color: string) {
    await createNote(content, color, title);
    setContent("This is a note.");
    setTitle("Topic")
    refreshNotes();
    onAddNote(color);
  }

  return (
    <div className="border-r border-gray-300 top-0 left-0 max-h-[100vh] w-24 m-0 flex flex-col pb-[20px] position-fixed">
      <p className="text-center pt-4 pb-12 font-extrabold text-black app-title">Joodle</p>
      <svg width="0" height="0" className="absolute">
  <filter id="goo">
    <feGaussianBlur stdDeviation="10 10" in="SourceGraphic" result="blur" />
    <feColorMatrix type="matrix" values="1 0 0 0 0
    0 1 0 0 0
    0 0 1 0 0
    0 0 0 22 -7" in="blur" result="colormatrix" />
    <feComposite in="SourceGraphic" in2="colormatrix" operator="over" result="composite" />
  </filter>
</svg>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="menu-nav flex-1" id="goo">
        <motion.button
          whileTap={buttonTapVariant}
          className="sidebar-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsPlus size="36" />
        </motion.button>

        <motion.ul
          variants={navVariants}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className={`pt-6 pb-6 text-center blobs ${isOpen ? 'animate' : ''}`}
        >
          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => handleCreateNote('bg-yellow-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-1' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-yellow-400 cursor-pointer gooey-item"
            />
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => handleCreateNote('bg-green-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-2' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-green-400 cursor-pointer gooey-item "
            />
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => handleCreateNote('bg-blue-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-3' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-blue-400 cursor-pointer gooey-item "
            />
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => handleCreateNote('bg-orange-400')}
            className={`gooey-container ${isOpen ? 'animate animate-item-4' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-orange-400 cursor-pointer gooey-item "
            />
          </motion.div>

          <motion.div
            variants={bouncingVariant}
            initial="initial"
            whileTap="whileTap"
            onClick={() => handleCreateNote('bg-red-300')}
            className={`gooey-container ${isOpen ? 'animate animate-item-5' : ''}`}
          >
            <motion.li
              variants={itemVariants}
              className="sidebar-color bg-red-300 cursor-pointer gooey-item "
            />
          </motion.div>
          
        </motion.ul>
      </motion.nav>
      <ThemeToggleButton />
    </div>
  );
}
