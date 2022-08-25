export function NoteVideo({ info }) {
    const link = info.url.split('=')[1]

    return <article class="note">
        <iframe className="note-video"
            src={`https://www.youtube.com/embed/${link}`} allow="fullscreen;"
            width="100%">
        </iframe>
        <h1>{info.title}</h1>
        {/* <img src="" /> */}
    </article>
}