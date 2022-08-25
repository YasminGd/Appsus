import { ColorOptions } from "./color-options.jsx"

export class NoteControls extends React.Component {
    state = {
        isColorOptionsOpen: false
    }

    render() {
        return <section className="note-controls">
            <div className="control-container"><i class="fa-solid fa-palette"></i></div>
            {this.state.isColorOptionsOpen && <ColorOptions />}
        </section>
    }
}