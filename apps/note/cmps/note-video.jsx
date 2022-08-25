export function NoteVideo({ info }) {
    const link = info.url.split('=')[1]

    return <React.Fragment>
        <iframe className="note-video"
            src={`https://www.youtube.com/embed/${link}`} allow="fullscreen;"
            width="100%">
        </iframe>
        {info.title && <h1>{info.title}</h1>}
    </React.Fragment>
    {/* <img src="" /> */ }
}