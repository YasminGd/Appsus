export function NoteImg({ info }) {
    return <article>
        <img src={info.url} />
        <h1>{info.title}</h1>
    </article>
}