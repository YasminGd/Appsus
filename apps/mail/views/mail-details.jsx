import { MailFolderList } from '../cmps/mail-folder-list.jsx'

export class MailDetails extends React.Component {
  render() {
    return (
      <section className="mail-details">
        <MailFolderList />
        <section className="mail-details">
          <h2>Hello</h2>
        </section>
      </section>
    )
  }
}
