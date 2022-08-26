import { NoteControls } from "./note-controls.jsx"
import { NoteEditor } from "./note-editor.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {
    state = {
        isControlsShown: false,
    }

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

    toggleControls = () => {
        this.setState((prevState) => ({ isControlsShown: !prevState.isControlsShown }))
    }

    render() {
        const { note, onToggleTodo, onRemoveNote, onSetColor, onToggleEditing } = this.props
        const { isControlsShown, } = this.state
        const DynamicCmp = this.getNoteType(note.type)
        const bgcolorTag = note.style.backgroundColor
        const borderTag = bgcolorTag !== 'white'&& (note.type !== 'note-img' || note.type !== 'note-video') ? 'border-invisible' : 'border-visible'

        return <section className={`note-preview ${bgcolorTag} ${borderTag}`} onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls} onClick={(event) => onToggleEditing(event, note)}>
            <DynamicCmp info={note.info} id={note.id} onToggleTodo={onToggleTodo} />
            {isControlsShown && <NoteControls onRemoveNote={onRemoveNote} note={note} onSetColor={onSetColor} />}
        </section>
    }
}