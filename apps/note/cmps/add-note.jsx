import { TypeOfNotesIcons } from "./type-of-notes-icons.jsx";
import { noteService } from "../services/note.service.js";

export class AddNote extends React.Component {

    state = {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
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

    onAddNewNote = (ev) => {
        ev.preventDefault()
        if (noteService.checkIfNoteChanged(this.state)) {
            this.props.onAddNewNote(this.state)
            this.resetNote()
        }
    }

    resetNote = (type = 'note-txt') => {
        this.setState({
            type,
            info: {
                title: '',
                subject: '',
                url: '',
                todos: ''
            },
        }
        )
    }

    render() {
        const { title } = this.state.info
        const placeholder = noteService.getInputPlaceHolder(this.state.type)
        const name = noteService.getInputNameAndVal(this.state.type)

        return <section className="add-note">
            <section className="input-container">
                <TypeOfNotesIcons onChangeTypeOfNote={this.resetNote} />
                <form onSubmit={this.onAddNewNote} className="inputs">
                    <input type="text" placeholder="Title" name="title" value={title} onChange={this.handleChange} />
                    <input type="text" placeholder={placeholder} name={name} value={this.state.info[name]} onChange={this.handleChange} autocomplete="off" />
                    <button className="add-note-button">Create</button>
                </form>
            </section>
        </section>
    }
}