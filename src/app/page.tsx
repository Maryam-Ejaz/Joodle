"use client";

import React, { useEffect, useState, useRef } from 'react';
import Note from "./components/MainPage/Note";
import PocketBase from "pocketbase";
import Sidebar from "./components/MainPage/Sidebar";
import TopBar from "./components/MainPage/TopBar";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { animateGooeyToCard } from "./components/Animations/morphAnimation";

// Function to fetch notes from PocketBase
async function fetchNotes(query: string = '') {
  const pb = new PocketBase("https://pocketbase-production-782d.up.railway.app/");
  const filter = query ? `title ~ "${query}" || content ~ "${query}"` : '';
  const response = await pb.collection("notes").getList(1, 50, { filter, sort: '-created,title' });
  return response.items as any[];
}

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addingNote, setAddingNote] = useState(false); 
  const newCardRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    // Fetch all notes initially
    const loadNotes = async () => {
      const initialNotes = await fetchNotes();
      setNotes(initialNotes);
    };
    loadNotes();
  }, []);

  useEffect(() => {
    // Refetch notes when search query changes
    const loadNotes = async () => {
      const filteredNotes = await fetchNotes(searchQuery);
      setNotes(filteredNotes);
    };
    loadNotes();
  }, [searchQuery]);

  // Function to refresh notes after delete/update
  const refreshNotes = async () => {
    const updatedNotes = await fetchNotes(searchQuery);
    setNotes(updatedNotes);
  };

  // Function to handle note addition animation
  const handleAddNote = () => {
    setAddingNote(true);
    // Trigger animation
    setTimeout(() => {
      if (newCardRef.current) {
        // animateGooeyToCard(newCardRef.current);
      }
      setAddingNote(false);
    }, 1000); // Match this duration with the animation time
  };

  return (
    <ThemeProvider>
      <div className="flex w-screen overflow-x-hidden h-[100vh] overflow-y-hidden">
        <Sidebar refreshNotes={refreshNotes} onAddNote={handleAddNote} /> 
        <div className="flex-1 pt-12 pl-10 mt-0 h-fit-content overflow-y-auto">
          <TopBar setSearchQuery={setSearchQuery} />
          <div className="flex flex-wrap gap-x-4 gap-y-4 h-fit-content overflow-x-hidden overflow-y-hidden">
            {notes?.reverse().map((note) => (
              <Note
                bgColor={note.color}
                key={note.id}
                noteId={note.id}
                title={note.title}
                note={note}
                refreshNotes={refreshNotes} // Pass refresh function to Note component
              />
            ))}
            {addingNote && (
              <div className="new-card" ref={newCardRef}>
                {/* Render the new card element */}
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotesPage;
