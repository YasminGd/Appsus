import { TypeOfNotesIcons } from "./type-of-notes-icons.jsx";

export class AddNote extends React.Component {
    render() {
        return <section className="add-note">
            <section class="input-container">
                <TypeOfNotesIcons />
                <input type="text" placeholder="Take a note..." />
            </section>
        </section>
    }
}