import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <section className="note-list">
        {
            notes.map((note, idx) =>
                <article key={note.id} className="note-preview">
                    {idx}
                    <NotePreview note={note} />
                </article>)
        }
    </section>
}