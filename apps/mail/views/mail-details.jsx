import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail.service.js'

export class MailDetails extends React.Component {
  state = {
    mail: null,
  }

  componentDidMount() {
    console.log(`mailService:`, mailService)
  }

  loadMail = () => {}

  render() {
    console.log(`this.props:`, this.props)
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
