import { ColorOptions } from "./color-options.jsx"

export class NoteControls extends React.Component {
    state = {
        isColorOptionsOpen: false
    }

    toggleColorOptions = (ev) => {
        ev.stopPropagation()
        this.setState((prevState) => ({ isColorOptionsOpen: !prevState.isColorOptionsOpen }))
    }

    closeColorOptions = () => {
        this.setState({isColorOptionsOpen: false})
    }

    render() {
        const { onRemoveNote, note, onSetColor, onCloneNote, onSendAsMail } = this.props
        const bgc = (note.type === 'note-img' || note.type === 'note-video') && !note.info.title ? 'grey-gradient' : ''

        return <section className={`note-controls ${bgc} rounded-bottom`} onMouseLeave={this.closeColorOptions}>
            <div className="control-container" onClick={this.toggleColorOptions}><img src="./assets/img/note/colors.svg"/></div>
            <div className="control-container" onClick={(ev) => onRemoveNote(ev, note.id, note.isPinned)}><img src="./assets/img/note/trash-can.svg"/></div>
            <div className="control-container" onClick={(ev) => onCloneNote(ev, note.id)}><img src="./assets/img/note/copy-note.svg"/></div>
            <div className="control-container" onClick={(ev) => onSendAsMail(ev, note)}><img src="./assets/img/note/save-as-mail.svg"/></div>
            {this.state.isColorOptionsOpen && <ColorOptions onSetColor={onSetColor} noteId={note.id} />}
        </section>
    }
}