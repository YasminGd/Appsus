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

    render() {
        const { notes } = this.state
        return <section className="note-app">
            <div>note app</div>
            <NoteList notes={notes}/>
        </section>
    }
}
