import { NoteControls } from "./note-controls.jsx"
import { NoteEditor } from "./note-editor.jsx"
import { NoteImg } from "./note-img.jsx"
import { NotePin } from "./note-pin.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {

    getNoteType = (type) => {
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

    render() {
        const { note, onToggleTodo, onRemoveNote, onSetColor, onToggleEditing, onCloneNote, onTogglePinnedNote } = this.props
        const DynamicCmp = this.getNoteType(note.type)
        const bgcolorTag = note.style.backgroundColor ? note.style.backgroundColor : 'white'
        const borderTag = bgcolorTag !== 'white' && (note.type !== 'note-img' || note.type !== 'note-video') ? 'border-invisible' : 'border-visible'

        return <section className={`note-preview ${bgcolorTag} ${borderTag}`} onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls} onClick={(event) => onToggleEditing(event, note)}>
            <DynamicCmp info={note.info} id={note.id} onToggleTodo={onToggleTodo} />
            <NotePin onTogglePinnedNote={onTogglePinnedNote} isPinned={note.isPinned} noteId={note.id} />
            <NoteControls onRemoveNote={onRemoveNote} note={note} onSetColor={onSetColor} onCloneNote={onCloneNote} />
        </section>
    }
}