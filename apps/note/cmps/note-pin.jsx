export function NotePin({ onTogglePinnedNote, isPinned, noteId }) {
    const imgSrc = isPinned ? 'pinned-note.svg' : 'unpinned-note.svg'

    return <div className="note-pin">
        <img src={`./../../assets/img/note/${imgSrc}`} alt="" onClick={(ev) => onTogglePinnedNote(ev, noteId)} />
    </div>

}