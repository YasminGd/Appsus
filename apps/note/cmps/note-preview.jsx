import { NoteControls } from "./note-controls.jsx"
import { NoteEditor } from "./note-editor.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {
    state = {
        isControlsShown: false,
        inEditingMode: false
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

    toggleEditing = () => {
        this.setState((prevState) => ({ inEditingMode: !prevState.inEditingMode }))
    }

    render() {
        const { note, onToggleTodo, onRemoveNote, onSetColor } = this.props
        const { isControlsShown, inEditingMode } = this.state
        const DynamicCmp = this.getNoteType(note.type)
        const bgcolorTag = note.style ? note.style.backgroundColor : ''
        const borderTag = bgcolorTag && note.type !== 'note-img' ? 'border-invisible' : 'border-visible'

        return <section className={`note-preview ${bgcolorTag} ${borderTag}`} onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
            <DynamicCmp info={note.info} id={note.id} onToggleTodo={onToggleTodo} onClick={this.toggleEditing} />
            {isControlsShown && <NoteControls onRemoveNote={onRemoveNote} note={note} onSetColor={onSetColor} />}
            {inEditingMode && <NoteEditor />}
        </section>
    }
}