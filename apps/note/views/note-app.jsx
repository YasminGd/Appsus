import { AddNote } from '../cmps/add-note.jsx'
import { FilterByType } from '../cmps/filter-by-type.jsx'
import { NoteEditor } from '../cmps/note-editor.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import { eventBusService } from './../../../services/event-bus.service.js'

//prettier-ignore
export class NoteApp extends React.Component {
    unsubscribe
    state = {
        notes: [],
        pinnedNotes: [],
        noteToEdit: null,
        searchFilter: '',
        typeFilter: ''
    }

    componentDidMount() {
        this.unsubscribe = eventBusService.on('update-note-filter', (searchFilter) => this.setState({ searchFilter },
            () => this.loadNotes()))
        if (this.props.match.params.noteType) this.updateTypeFilter()
        else this.loadNotes()

        this.onCheckMailReceived()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.noteType !== this.props.match.params.noteType) this.updateTypeFilter()
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    loadNotes = () => {
        const { searchFilter, typeFilter } = this.state
        noteService.getNotes(searchFilter, typeFilter, false)
            .then(notes => this.setState({ notes }))
        noteService.getNotes(searchFilter, typeFilter, true)
            .then(pinnedNotes => this.setState({ pinnedNotes }))
    }

    onCheckMailReceived = () => {
        const urlParams = new URLSearchParams(this.props.location.search)
        const title = urlParams.get('title')
        const subject = urlParams.get('subject')

        if (title && subject) {
            const note = noteService.getEmptyNoteTemplate()
            note.info.title = title
            note.info.subject = subject
            this.setState({ noteToEdit: note })
        }
    }

    updateTypeFilter() {
        const noteType = noteService.getNoteType(this.props.match.params.noteType)
        this.setState({ typeFilter: noteType }, this.loadNotes)
    }

    onAddNewNote = (note) => {
        noteService.addNewNote(note)
            .then(this.loadNotes())
    }

    onRemoveNote = (ev, noteId, isPinned) => {
        ev.stopPropagation()
        noteService.removeNote(noteId)
            .then(() => {
                const propertyToBeFiltered = isPinned ? 'pinnedNotes' : 'notes'
                let notes = this.state[propertyToBeFiltered]
                notes = notes.filter(note => note.id !== noteId)
                this.setState({ [propertyToBeFiltered]: notes })
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

    onCloneNote = (ev, noteId) => {
        ev.stopPropagation()
        noteService.cloneNote(noteId)
            .then(this.loadNotes)
    }

    onTogglePinnedNote = (ev, noteId) => {
        ev.stopPropagation()
        noteService.togglePinnedNote(noteId)
            .then(this.loadNotes())
    }

    onUpdateFilter = (newFilter) => {
        this.setState({ searchFilter: newFilter }, this.loadNotes)
    }

    render() {
        const { notes, pinnedNotes, noteToEdit } = this.state
        return <section className="note-app">
            <FilterByType />
            <section className="main-layout">
                < AddNote onAddNewNote={this.onAddNewNote} />
                {
                    pinnedNotes.length !== 0 &&
                    <React.Fragment>
                        <p className="list-dividers-p">Pinned</p>
                        <section className="pinned-note-list">
                            <NoteList notes={pinnedNotes} onToggleTodo={this.onToggleTodo} onRemoveNote={this.onRemoveNote} onSetColor={this.onSetColor} onToggleEditing={this.onToggleEditing} onCloneNote={this.onCloneNote} onTogglePinnedNote={this.onTogglePinnedNote} />
                        </section>
                        {notes.length !== 0 && <p className="list-dividers-p">Others</p>}
                    </React.Fragment>
                }
                < NoteList notes={notes} onToggleTodo={this.onToggleTodo} onRemoveNote={this.onRemoveNote} onSetColor={this.onSetColor} onToggleEditing={this.onToggleEditing} onCloneNote={this.onCloneNote} onTogglePinnedNote={this.onTogglePinnedNote} />
                {noteToEdit && <NoteEditor note={noteToEdit} onToggleEditing={this.onToggleEditing} onEditNote={this.onEditNote} onTogglePinnedNote={this.onTogglePinnedNote} />}
            </section>
        </section>

    }
}
