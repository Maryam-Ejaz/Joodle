"use client";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatDateAndTime } from "../../utils/dateUtils";
import { updateNoteContent, deleteNote } from "../../../services/noteService";

export default function Note({ note, bgColor, noteId, refreshNotes }: any) {
  const { id, title, content, created } = note || {};
  const [titleContent, setTitleContent] = useState(title);
  const [textContent, setTextContent] = useState(content);
  const [showTextArea, setShowTextArea] = useState(false);
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [titleFocused, setTitleFocused] = useState(false);
  const [contentFocused, setContentFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const titleAreaRef = useRef<HTMLTextAreaElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setShowTextArea(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [noteRef]);

  useEffect(() => {
    if (!titleFocused && !contentFocused) {
      handleBlur();
    }
  }, [titleFocused, contentFocused]);

  function toggleTextArea() {
    setShowTextArea(!showTextArea);
    setIsExpanded(!isExpanded);
  }

  async function handleBlur() {
    if (deleteButtonClicked) {
      setDeleteButtonClicked(false);
      return;
    }
    await updateNoteContent(noteId, titleContent, textContent);
    setIsExpanded(false);
    setShowTextArea(false);
    refreshNotes();
  }

  async function handleDelete() {
    setDeleteButtonClicked(true);
    await deleteNote(noteId);
    refreshNotes();
  }

  return (
    <motion.div
      ref={noteRef}
      initial={{ x: -1000, width: "16rem", height: "16rem", flexWrap: "wrap" }} // Initial size and wrap
      animate={{
        x: 0,
        width: isExpanded ? (window.innerWidth > 800 ? "40rem" : "20rem") : "16rem",
        height: isExpanded ? (window.innerWidth > 800 ? "16rem" : "40rem") : "16rem",
        flexWrap: isExpanded ? "wrap" : "nowrap", // Flex wrap animation
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 12,
        duration: 0.5,
      }}
      className={`${bgColor} bg-opacity-70 relative flex flex-col text-gray-800 rounded-3xl p-4 pb-1`}
    >
      <motion.div
        id="contents"
        className={`flex-1 flex ${isExpanded ? "flex-wrap" : "flex-nowrap"} gap-4`} // Flex wrap class
      >
        {showTextArea ? (
          <div className="w-full">
            <motion.textarea
              ref={titleAreaRef}
              autoFocus
              value={titleContent}
              onChange={(e) => setTitleContent(e.target.value)}
              onFocus={() => setTitleFocused(true)}
              onBlur={() => setTitleFocused(false)}
              className="w-full text-lg resize-none bg-transparent border-none outline-none mb-2 h-6"
              style={{ width: "100%" }} // Dynamically set width to match the motion div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.textarea
              ref={textAreaRef}
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              onFocus={() => setContentFocused(true)}
              onBlur={() => setContentFocused(false)}
              className="h-44 resize-none bg-transparent border-none outline-none"
              style={{ width: "100%" }} // Dynamically set width to match the motion div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ) : (
          <div className="w-full">
            <motion.h5
              className="text-lg font-semibold hover:overflow-y-auto overflow-y-hidden mb-2 h-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {titleContent}
            </motion.h5>
            <motion.p
              className="text-base hover:overflow-y-auto overflow-y-hidden h-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {textContent}
            </motion.p>
          </div>
        )}
      </motion.div>
      <div
        id="dateAndEdit"
        className="bottom-4 flex items-center mt-auto mb-2 justify-between"
      >
        <p
          className={`text-xs ${
            showTextArea ? "text-transparent" : "text-black"
          }`}
        >
          {formatDateAndTime(created)}
        </p>
        <div className="flex items-center">
          {showTextArea && (
            <div
              onClick={handleDelete}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white
              hover:bg-transparent
              transition-all duration-300 ease-linear cursor-pointer mr-2"
            >
              <BiSolidTrash size="18" />
            </div>
          )}
          <div
            onClick={toggleTextArea}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white
            hover:bg-transparent hover:text-black
            transition-all duration-300 ease-linear cursor-pointer"
          >
            <BiSolidPencil size="18" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
