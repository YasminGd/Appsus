export function NoteImg({ info }) {

    const roundedImgClass= info.title ? '' : 'rounded-bottom'
    return <React.Fragment>
        <img src={info.url} className={`note-img rounded-top ${roundedImgClass}`} />
        {info.title && <p className="title">{info.title}</p>}
    </React.Fragment>
}