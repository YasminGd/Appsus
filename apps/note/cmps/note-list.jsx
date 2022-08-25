import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onToggleTodo }) {
    return <section className="note-list">
        {
            notes.map(note => {
                const bgcolorTag = note.style ? note.style.backgroundColor : ''
                const borderTag = bgcolorTag && note.type !== 'note-img' ? 'border-invisible' : 'border-visible'

                return < article key={note.id} className={`note-preview ${bgcolorTag} ${borderTag}`} >
                    < NotePreview note={note} onToggleTodo={onToggleTodo} />
                </ article>
            })
        }
    </section >
}