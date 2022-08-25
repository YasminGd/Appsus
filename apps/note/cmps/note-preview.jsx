import { NoteControls } from "./note-controls.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export function NotePreview({ note, onToggleTodo }) {

    function getNoteType(type) {
        switch (type) {
            case 'note-txt':
                return NoteTxt
            case 'note-img':
                return NoteImg
            case 'note-todos':
                return NoteTodos
            case 'note-video':
                return NoteVideo
        }
    }

    const DynamicCmp = getNoteType(note.type)

    return <section>
        <DynamicCmp info={note.info} id={note.id} onToggleTodo={onToggleTodo} />
    </section>
}