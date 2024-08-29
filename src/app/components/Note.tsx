"use client";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

function formatDateAndTime(inputDate: any) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // January is month 0
  const year = dateObj.getFullYear();
  return formatDate(`${day}-${month}-${year}`);
}

function formatDate(inputDate: any) {
  const [day, month, year] = inputDate.split("-");
  return `${new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

export default function Note({ note, bgColor, noteId }: any) {
  const { id, title, content, created } = note || {};

  const [textContent, setTextContent] = useState(content);
  const [showTextArea, setShowTextArea] = useState(false);
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const deleteButtonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function editNote() {
    if (showTextArea) {
      handleBlur(); // Call handleBlur if the textarea is already visible
      router.refresh();
    } else {
      console.log("edit the note");
      setShowTextArea(true);

    }
  }

  async function handleBlur() {
    // Prevent update if delete button was clicked
    if (deleteButtonClicked) {
      setDeleteButtonClicked(false);
      return;
    }
    else {
      console.log("Textarea lost focus!");
      console.log("Note ID: " + noteId);
      const pb = new PocketBase("https://joodle-pocketbase-production.up.railway.app/");

      // Example update data
      const data = {
        content: textContent,
      };

      await pb.collection("notes").update(noteId, data);
      setShowTextArea(!showTextArea);
      router.refresh();

    }
  }

  async function handleDelete() {
    setDeleteButtonClicked(true); 
    console.log("Delete the note");
    const pb = new PocketBase("https://joodle-pocketbase-production.up.railway.app/");

    await pb.collection("notes").delete(noteId);
    router.refresh();
  }

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.5,
      }}
      className={`${bgColor} bg-opacity-70 relative flex flex-col text-gray-800 rounded-3xl p-4 pb-1 w-60 h-60`}
    >
      <div id="contents" className="flex-1">
        {showTextArea && (
          <textarea
            ref={textAreaRef}
            autoFocus
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            className="h-44 resize-none bg-transparent border-none outline-none"
          />
        )}
        {!showTextArea && (
          <h5 className="text-base pr-4 font-semibold hover:overflow-y-auto overflow-y-hidden h-44">
            {textContent}
          </h5>
        )}
      </div>
      <div
        id="dateAndEdit"
        className="bottom-4 flex items-center mt-auto mb-2 justify-between"
      >
        <p
          className={`text-xs ${showTextArea ? "text-transparent" : "text-black"
            }`}
        >
          {formatDateAndTime(created)}
        </p>
        <div className="flex items-center">
          {showTextArea && (
            <div
              ref={deleteButtonRef}
              onClick={handleDelete}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white
              hover:bg-transparent
              transition-all duration-300 ease-linear cursor-pointer mr-2"
            >
              <BiSolidTrash size="18" />
            </div>
          )}
          <div
            onClick={editNote}
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
