export function NoteVideo({ info }) {
    const link = info.url.split('=')[1]
    const roundedVideoClass= info.title ? '' : 'rounded-bottom'

    return <React.Fragment>
        <iframe className={`note-video rounded-top ${roundedVideoClass}`}
            src={`https://www.youtube.com/embed/${link}`} allow="fullscreen;"
            width="100%">
        </iframe>
        {info.title && <h1>{info.title}</h1>}
    </React.Fragment>
    {/* <img src="" /> */ }
}