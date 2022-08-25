export function NoteTodos({ info, id, onToggleTodo }) {

    return <article className="note-todos">
        <h1>{info.title}</h1>
        <ul>
            {
                info.todos.map((todo, idx) => {
                    const crossedOutClass = todo.doneAt ? 'crossed-out' : ''
                    const isChecked = todo.doneAt ? true : false

                    return <li key={todo.txt} className={crossedOutClass}>
                        <label>
                            <input onClick={() => onToggleTodo(id, idx)} type="checkbox" checked={isChecked} />
                            {todo.txt}
                        </label>
                    </li>
                })
            }
        </ul>
    </article>
}