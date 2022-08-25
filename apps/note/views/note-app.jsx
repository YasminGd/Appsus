import { AddNote } from '../cmps/add-note.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

export class NoteApp extends React.Component {

    state = {
        notes: [],
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then(notes => this.setState({ notes }))
    }

    onAddNewNote = (note) => {
        noteService.addNewNote(note)
            .then(this.loadNotes())
    }

    onToggleTodo = (noteId, todoIdx) => {
        noteService.toggleTodo(noteId, todoIdx)
            .then(this.loadNotes)
    }

    render() {
        const { notes } = this.state
        return <section className="note-app">
            <AddNote onAddNewNote={this.onAddNewNote} />
            <NoteList notes={notes} onToggleTodo={this.onToggleTodo}/>
        </section>
    }
}
