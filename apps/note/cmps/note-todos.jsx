export function NoteTodos({ info }) {

    return <article>
        <h1>{info.title}</h1>
        <ul>
            {
                info.todos.map(todo => {
                    const crossedOutClass = todo.doneAt ? 'crossed-out' : ''
                    const isChecked = todo.doneAt ? true : false

                    return <li key={todo.txt} className={crossedOutClass}>
                        <label>
                            <input type="checkbox" checked={isChecked} />
                            {todo.txt}
                        </label>
                    </li>
                })
            }
        </ul>
    </article>
}