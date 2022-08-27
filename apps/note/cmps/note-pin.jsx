export function NotePin({ onTogglePinnedNote, isPinned, noteId }) {
    const imgSrc = isPinned ? 'pinned-note.svg' : 'unpinned-note.svg'

    return <div className="note-pin" onClick={(ev) => onTogglePinnedNote(ev, noteId)} >
        <img src={`./../../assets/img/note/${imgSrc}`} alt="" />
    </div>

}