import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase-production-782d.up.railway.app");

export async function updateNoteContent(noteId: string, title: string, content: string) {
  return await pb.collection("notes").update(noteId, { title, content });
}

export async function deleteNote(noteId: string) {
  return await pb.collection("notes").delete(noteId);
}

export async function createNote(content: string, color: string, title: string) {
  return await pb.collection("notes").create({ title, content, color});
}
