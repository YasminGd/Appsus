import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailList } from '../cmps/mail-list.jsx'

export class MailApp extends React.Component {
    render() {
        return <section className="mail-app">
            <MailFilter />
            <MailList />
            <MailCompose />
        </section>

    }
}
