import { NoteControls } from "./note-controls.jsx";
import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onToggleTodo, onRemoveNote, onSetColor, onToggleEditing, onCloneNote }) {

    return <section className="note-list">
        {
            notes.map(note => {
                return <NotePreview
                    key={note.id}
                    note={note}
                    onToggleTodo={onToggleTodo}
                    onRemoveNote={onRemoveNote}
                    onSetColor={onSetColor}
                    onToggleEditing={onToggleEditing}
                    onCloneNote={onCloneNote} />
            })
        }
    </section >
}