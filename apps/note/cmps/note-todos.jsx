export function NoteTodos({ info }) {
    return <article>
        <h1>{info.label}</h1>
        <ul>
            {
                info.todos.map(todo => <li key={todo.txt}>
                    <input type="checkbox"/>
                    {todo.txt}
                </li>)
            }
        </ul>
    </article>
}