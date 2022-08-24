import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"

export function NotePreview({ note }) {

    function getNoteType(type) {
        switch (type) {
            case 'note-txt':
                return NoteTxt
            case 'note-img':
                return NoteImg
            case 'note-todos':
                return NoteTodos
        }
    }

    const DynamicCmp = getNoteType(note.type)

    return <article className="grid-item">
        <DynamicCmp info={note.info} />
    </article>
}