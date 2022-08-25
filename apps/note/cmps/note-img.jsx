export function NoteImg({ info }) {

    return <React.Fragment>
        <img src={info.url} className="note-img" />
        {info.title && <h1>{info.title}</h1>}
    </React.Fragment>
}