export class NoteEditor extends React.Component {
    state = {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: {},
        id: ''
    }

    componentDidMount() {
        const { note } = this.props
        this.setState({ type: note.type, info: note.info, id: note.id, style: note.style })
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

    render() {
        const { info, style, type } = this.state
        const { onToggleEditing, getInputNameAndVal, getInputPlaceHolder } = this.props
        const name = getInputNameAndVal(type)
        const placeholder = type === 'note-txt' ? 'Note' : getInputPlaceHolder(type)
        const color = style.backgroundColor

        return <React.Fragment>
            <section className={`note-editor ${color}`}>
                <form onSubmit={this.onEdit}>
                    <input type="text" value={info.title} onChange={this.handleChange} name="title" placeholder="Title" />
                    <textArea onChange={this.handleChange} name={`${name}`} placeholder={placeholder}>{info[name]}</textArea>
                </form>
            </section>
            <section className="screen" onClick={(event) => onToggleEditing(event, null)}></section>
        </React.Fragment>
    }
}