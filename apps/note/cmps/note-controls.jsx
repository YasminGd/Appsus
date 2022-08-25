import { ColorOptions } from "./color-options.jsx"

export class NoteControls extends React.Component {
    state = {
        isColorOptionsOpen: false
    }

    toggleColorOptions = () => {
        this.setState((prevState) => ({ isColorOptionsOpen: !prevState.isColorOptionsOpen }))
    }

    render() {
        const { onRemoveNote, note,onSetColor } = this.props

        return <section className="note-controls">
            <div className="control-container" onClick={this.toggleColorOptions}><i class="fa-solid fa-palette"></i></div>
            <div className="control-container" onClick={() => onRemoveNote(note.id)}><i class="fa-solid fa-trash"></i></div>
            {this.state.isColorOptionsOpen && <ColorOptions onSetColor={onSetColor} noteId={note.id} />}
        </section>
    }
}