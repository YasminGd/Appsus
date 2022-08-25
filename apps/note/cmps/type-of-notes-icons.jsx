export function TypeOfNotesIcons({ onChangeTypeOfNote }) {

    return <section className="type-of-notes-icons">
        <div className="fa-container" onClick={() => onChangeTypeOfNote('note-txt')}><i class="fa-solid fa-font"></i></div>
        <div className="fa-container" onClick={() => onChangeTypeOfNote('note-video')}><i class="fa-brands fa-youtube"></i></div>
        <div className="fa-container" onClick={() => onChangeTypeOfNote('note-img')}><i class="fa-solid fa-image"></i></div>
        <div className="fa-container" onClick={() => onChangeTypeOfNote('note-todos')}><i class="fa-solid fa-list"></i></div>
    </section>
}