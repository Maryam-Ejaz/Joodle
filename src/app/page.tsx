import Note from "./components/Note";
import PocketBase from "pocketbase";
import Sidebar from "./components/Sidebar";


export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

  async function createAdminAccount() {
    const pb = new PocketBase("https://joodle-pocketbase-production.up.railway.app/");
  
    try {
      // Attempt to create the first admin account
      const adminData = await pb.admins.create({
        email: "mariam.ejaz12@gmail.com",
        password: "55667788",
        passwordConfirm: "55667788",
      });
  
      console.log("Admin account created successfully:", adminData);
    } catch (error) {
      console.error("Error creating admin account:", error);
    }
  }

async function getNotes() {

  const pb = new PocketBase("https://pocketbase-production-782d.up.railway.app/");

  const data = await pb.collection("notes").getList(1, 50);
  return data?.items as any[];
}


export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <>
      <div className="flex w-screen overflow-x-hidden h-screen">
        <Sidebar />
        <div className="flex-1 pt-12 pl-10 mt-8 max-h-screen">
          <div className="flex flex-wrap gap-x-4 gap-y-4 max-h-[100%] overflow-x-hidden hover:overflow-y-auto overflow-hidden">
            {notes?.reverse().map((note) => {
              return (
                <Note
                  bgColor={note.color}
                  key={note.id}
                  noteId={note.id}
                  note={note}
                />
              );
            })}
          </div>
        </div>
      
      </div>
    </>
  );
}
