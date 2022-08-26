import { AddNote } from '../cmps/add-note.jsx'
import { NoteEditor } from '../cmps/note-editor.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

export class NoteApp extends React.Component {

    state = {
        notes: [],
        noteToEdit: null
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

    onRemoveNote = (ev, noteId) => {
        ev.stopPropagation()
        noteService.removeNote(noteId)
            .then(() => {
                let { notes } = this.state
                notes = notes.filter(note => note.id !== noteId)
                this.setState({ notes })
            }
            )
    }

    onToggleTodo = (noteId, todoIdx) => {
        noteService.toggleTodo(noteId, todoIdx)
            .then(this.loadNotes)
    }

    onSetColor = (ev, color, noteId) => {
        ev.stopPropagation()
        noteService.setColor(color, noteId)
            .then(this.loadNotes)
    }

    onToggleEditing = (ev, note) => {
        if (note && note.type === 'note-todos') return
        ev.stopPropagation()
        this.setState({ noteToEdit: note })
    }

    onEditNote = (editedNote) => {
        noteService.editNote(editedNote)
            .then(() => {
                this.setState({ noteToEdit: null })
                this.loadNotes()
            })
    }

    getInputNameAndVal = (type) => {
        switch (type) {
            case ('note-txt'):
                return 'subject'
            case ('note-img'):
            case ('note-video'):
                return 'url'
            case ('note-todos'):
                return 'todos'
        }
    }

    getInputPlaceHolder = (type) => {
        switch (type) {
            case ('note-txt'):
                return 'Take a note...'
            case ('note-img'):
                return 'Enter an image link'
            case ('note-video'):
                return 'Enter a video link'
            case ('note-todos'):
                return 'Enter a list separated by comas'
        }
    }

    render() {
        const { notes, noteToEdit } = this.state
        return <section className="note-app">
            <AddNote onAddNewNote={this.onAddNewNote} getInputNameAndVal={this.getInputNameAndVal} getInputPlaceHolder={this.getInputPlaceHolder} />
            <NoteList notes={notes} onToggleTodo={this.onToggleTodo} onRemoveNote={this.onRemoveNote} onSetColor={this.onSetColor} onToggleEditing={this.onToggleEditing} />
            {noteToEdit && <NoteEditor note={noteToEdit} onToggleEditing={this.onToggleEditing} onEditNote={this.onEditNote} getInputNameAndVal={this.getInputNameAndVal} getInputPlaceHolder={this.getInputPlaceHolder}/>}
        </section>
    }
}
