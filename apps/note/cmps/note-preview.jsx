import { NoteControls } from "./note-controls.jsx"
import { NoteImg } from "./note-img.jsx"
import { NotePin } from "./note-pin.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"
import { utilService } from "./../../../services/util.service.js"
import { noteService } from "../services/note.service.js"
const { withRouter } = ReactRouterDOM

class _NotePreview extends React.Component {

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

    onSendAsMail = (ev, note) => {
        ev.stopPropagation()
        const msgBody = noteService.getInputNameAndVal(note.type)
        const { title } = note.info
        const params = utilService.getUrlByParams({ title, subject: note.info[msgBody] })
        const path = `mail/new-mail${params}`
        this.props.history.push(path)
    }

    render() {
        const { note, onToggleTodo, onRemoveNote, onSetColor, onToggleEditing, onCloneNote, onTogglePinnedNote } = this.props
        const DynamicCmp = this.getNoteType(note.type)
        const bgcolorTag = note.style.backgroundColor ? note.style.backgroundColor : 'white'
        const borderTag = bgcolorTag !== 'white' && (note.type !== 'note-img' || note.type !== 'note-video') ? 'border-invisible' : 'border-visible'

        return <section className={`note-preview ${bgcolorTag} ${borderTag}`} onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls} onClick={(event) => onToggleEditing(event, note)}>
            <DynamicCmp info={note.info} id={note.id} onToggleTodo={onToggleTodo} />
            <NotePin onTogglePinnedNote={onTogglePinnedNote} isPinned={note.isPinned} noteId={note.id} />
            <NoteControls onRemoveNote={onRemoveNote} note={note} onSetColor={onSetColor} onCloneNote={onCloneNote} onSendAsMail={this.onSendAsMail} />
        </section>
    }
}

export const NotePreview = withRouter(_NotePreview)