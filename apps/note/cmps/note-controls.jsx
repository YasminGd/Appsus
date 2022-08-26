import { ColorOptions } from "./color-options.jsx"

export class NoteControls extends React.Component {
    state = {
        isColorOptionsOpen: false
    }

    toggleColorOptions = (ev) => {
        ev.stopPropagation()
        this.setState((prevState) => ({ isColorOptionsOpen: !prevState.isColorOptionsOpen }))
    }

    render() {
        const { onRemoveNote, note, onSetColor, onCloneNote } = this.props
        const bgc = (note.type === 'note-img' || note.type === 'note-video') && !note.info.title ? 'grey-gradient' : ''

        return <section className={`note-controls ${bgc} rounded-bottom`}>
            <div className="control-container" onClick={this.toggleColorOptions}><i class="fa-solid fa-palette"></i></div>
            <div className="control-container" onClick={(ev) => onRemoveNote(ev, note.id)}><i class="fa-solid fa-trash"></i></div>
            <div className="control-container" onClick={(ev) => onCloneNote(ev, note.id)}><i class="fa-regular fa-clone"></i></div>
            {this.state.isColorOptionsOpen && <ColorOptions onSetColor={onSetColor} noteId={note.id} />}
        </section>
    }
}