import { Header } from "./components/header";
import { StickyNotes } from "./components/Sticky";
import NotesContext from "./hooks/notesContext";
import { useState } from "react";

interface NotesProps {
  title: string;
  description: string;
}

function App() {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Header />
      <StickyNotes />
    </NotesContext.Provider>
  );
}

export default App;
