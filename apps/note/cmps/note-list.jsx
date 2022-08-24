import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <ul className="note-list">
        {
            notes.map(note =>
                <li key={note.id} className="note-preview">
                    <NotePreview note={note} />
                </li>)
        }
    </ul>
}