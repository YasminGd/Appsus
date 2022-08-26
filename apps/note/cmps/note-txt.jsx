export function NoteTxt({ info }) {
    return <article>
        <p className="title">{info.title}</p>
        <p className="subject">{info.subject}</p>
    </article>
}