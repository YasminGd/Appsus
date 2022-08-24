export function NoteVideo({ info }) {
    const link = info.url.split('=')[1]

    return <article class="note">
        <iframe
            src={`https://www.youtube.com/embed/${link}`} allow="fullscreen;"
            width="100%">
        </iframe>
        {/* <img src="" /> */}
    </article>
}