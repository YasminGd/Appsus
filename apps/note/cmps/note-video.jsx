export function NoteVideo({ info }) {
    const link = info.url.split('=')[1]
    const roundedVideoClass= info.title ? '' : 'rounded-bottom'

    return <React.Fragment>
        <iframe className={`note-video rounded-top ${roundedVideoClass}`}
            src={`https://www.youtube.com/embed/${link}`} allow="fullscreen;"
            width="100%">
        </iframe>
        {info.title && <p className="title">{info.title}</p>}
    </React.Fragment>
    {/* <img src="" /> */ }
}