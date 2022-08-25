export function ColorOptions({ onSetColor, noteId }) {
    const colors = ['yellow', 'orange', 'red', 'pink', 'purple', 'dark-blue', 'light-blue', 'green']

    return <section className="color-options">
        {
            colors.map(color => <div className={color} onClick={() => onSetColor(color, noteId)}></div>)
        }
    </section>
}