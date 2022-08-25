export function NoteImg({ info }) {

    const roundBorderBelowClass = info.title ? '' : 'round-below'
    return <React.Fragment>
        <img src={info.url} className={`note-img ${roundBorderBelowClass}`} />
        {info.title && <h1>{info.title}</h1>}
    </React.Fragment>
}