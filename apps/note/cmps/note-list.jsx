import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <ul className="note-list">
        {
            notes.map(note=> <NotePreview />)
        }
    </ul>
}