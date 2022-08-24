import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <section className="note-list">
        {
            notes.map(note => {
                const bgcolorTag = note.style ? note.style.backgroundColor : 'white'
                const borderTag = bgcolorTag === 'white' ? '1px solid #e0e0e0' : 'none'

                return < article key={note.id} className="note-preview" style={{ backgroundColor: bgcolorTag, border: borderTag }}>
                    < NotePreview note={note} />
                </ article>
            })
        }
    </section >
}