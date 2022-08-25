import { NoteControls } from "./note-controls.jsx";
import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onToggleTodo, onRemoveNote }) {
    return <section className="note-list">
        {
            notes.map(note => {
                const bgcolorTag = note.style ? note.style.backgroundColor : ''
                const borderTag = bgcolorTag && note.type !== 'note-img' ? 'border-invisible' : 'border-visible'

                return <section className="note">
                    <button className="remove-note-btn" onClick={() => onRemoveNote(note.id)}>X</button>
                    <article key={note.id} className={`note-preview ${bgcolorTag} ${borderTag}`} >
                        < NotePreview note={note} onToggleTodo={onToggleTodo} />
                    </article>
                    <NoteControls />
                </section>
            })
        }
    </section >
}