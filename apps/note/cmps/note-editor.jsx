import { noteService } from "../services/note.service.js"
import { NotePin } from "./note-pin.jsx"
const { withRouter } = ReactRouterDOM

class _NoteEditor extends React.Component {
    state = {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: {},
        id: '',
        isPinned: false
    }

    componentDidMount() {
        const { note } = this.props
        this.setState({ type: note.type, info: note.info, id: note.id, style: note.style, isPinned: note.isPinned })
    }

    componentWillUnmount() {
        const urlParams = new URLSearchParams(this.props.location.search)
        const title = urlParams.get('title')
        const subject = urlParams.get('subject')

        if (title || subject) this.props.history.push('/note')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            info: {
                ...prevState.info,
                [field]: value
            }
        }))
    }

    onEdit = (ev) => {
        ev.preventDefault()
        this.props.onEditNote(this.state)
    }

    onTogglePinnedNote = () => {
        this.setState((prevState) => ({ isPinned: !prevState.isPinned }))
    }

    render() {
        const { info, style, type, isPinned } = this.state
        const { onToggleEditing } = this.props
        const name = noteService.getInputNameAndVal(type)
        const placeholder = type === 'note-txt' ? 'Note' : noteService.getInputPlaceHolder(type)
        const color = style.backgroundColor

        return <React.Fragment>
            <section className={`note-editor ${color}`}>
                <NotePin onTogglePinnedNote={this.onTogglePinnedNote} isPinned={isPinned} />
                <form onSubmit={this.onEdit}>
                    <input type="text" value={info.title} onChange={this.handleChange} name="title" placeholder="Title" />
                    <textArea onChange={this.handleChange} name={`${name}`} placeholder={placeholder}>{info[name]}</textArea>
                    <button className="edit-note-button">Confirm edit</button>
                </form>
            </section>
            <section className="screen" onClick={(event) => onToggleEditing(event, null)}></section>
        </React.Fragment>
    }
}

export const NoteEditor = withRouter(_NoteEditor)