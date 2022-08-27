export function NoteTodos({ info, id, onToggleTodo }) {

    const unCheckedInput = './assets/img/note/unchecked-input.svg'
    const checkedInput = './assets/img/note/checked-input.svg'

    return <article className="note-todos">
        <p className="title">{info.title}</p>
        <ul>
            {
                info.todos.map((todo, idx) => {
                    const crossedOutClass = todo.doneAt ? 'crossed-out' : ''
                    const imgSource = todo.doneAt ? checkedInput : unCheckedInput

                    return <li key={todo.txt} className={crossedOutClass}>
                        <label>
                            <img src={imgSource} className="checked-img" />
                            <input onClick={() => onToggleTodo(id, idx)} type="checkbox" />
                            {todo.txt}
                        </label>
                    </li>
                })
            }
        </ul>
    </article>
}