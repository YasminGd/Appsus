export function NoteImg({ info }) {

    const roundedImgClass= info.title ? '' : 'rounded-bottom'
    return <React.Fragment>
        <img src={info.url} className={`note-img rounded-top ${roundedImgClass}`} />
        {info.title && <h1>{info.title}</h1>}
    </React.Fragment>
}