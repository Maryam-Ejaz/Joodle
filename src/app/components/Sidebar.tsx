"use client";

import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";
import { BsPlus } from "react-icons/bs";

import { motion } from "framer-motion";
import { useState } from "react";

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
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Sidebar() {

  const [content, setContent] = useState("This is a note.");

  const router = useRouter();

  async function createNote(color: any) {
    console.log("create note");
    const pb = new PocketBase("https://pocketbase-production-782d.up.railway.app/");

    // example create data
    const data = {
      content: content,
      color: color,
    };
    await pb.collection("notes").create(data);

    // reset title and content
    setContent("This is a note.");
    router.refresh();
  }

  return (
    <div className="border-r border-gray-300 top-0 left-0 h-screen w-24 m-0 flex flex-col">
      <p className="text-center pt-4 pb-12 font-extrabold text-black">Joodle</p>
      <motion.nav initial={false}>
        <motion.button
          whileTap={{
            y: -10, // Move up 5 pixels
            rotate: 360, // Rotate 360 degrees
            scale: 1.1,
            transition: { duration: 0.2, damping: 10, stiffness: 200 }, // Add bounciness
          }}
          className="sidebar-icon"

          onClick={() => createNote('bg-yellow-400')
          }
        >
          <BsPlus size="36" />
        </motion.button>
      </motion.nav>
    </div>
  );
}
