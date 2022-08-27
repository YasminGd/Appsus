import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onToggleTodo, onRemoveNote, onSetColor, onToggleEditing, onCloneNote, onTogglePinnedNote }) {

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
                    onCloneNote={onCloneNote}
                    onTogglePinnedNote={onTogglePinnedNote} />
            })
        }
    </section >
}