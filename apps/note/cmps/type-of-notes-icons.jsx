export function TypeOfNotesIcons({ onChangeTypeOfNote }) {

    return <section className="type-of-notes-icons">
        <button className="fa-container" onClick={() => onChangeTypeOfNote('note-txt')}><img src="./assets/img/note/font.svg" /></button>
        <button className="fa-container" onClick={() => onChangeTypeOfNote('note-video')}><img src="./assets/img/note/video.svg" /></button>
        <button className="fa-container" onClick={() => onChangeTypeOfNote('note-img')}><img src="./assets/img/note/image.svg" /></button>
        <button className="fa-container" onClick={() => onChangeTypeOfNote('note-todos')}><img src="./assets/img/note/list.svg" /></button>
    </section>
}