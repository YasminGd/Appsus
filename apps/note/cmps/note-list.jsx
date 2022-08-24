import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <ul className="note-list grid" >
        {
            notes.map(note =>
                <li key={note.id} className="note-preview grid-item">
                    <NotePreview note={note} />
                </li>)
        }
    </ul>
}