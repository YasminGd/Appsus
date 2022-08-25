import { utilService } from '../../../services/util.service.js'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail.service.js'
const { Link } = ReactRouterDOM

export class MailDetails extends React.Component {
  state = {
    mail: null,
  }

  componentDidMount() {
    this.loadMail()
  }

  loadMail = () => {
    const { mailId } = this.props.match.params
    mailService.getMailById(mailId).then((mail) => {
      if (!mail) return this.onGoBack()
      this.setState({ mail })
    })
  }

  onGoBack = () => {
    this.props.history.push('/book')
  }

  render() {
    const { mail } = this.state
    if (!mail) return <div></div>
    const { body, from, sentAt, to, subject } = mail
    const date = utilService.formatTime(sentAt)
    console.log(`mail:`, mail)
    return (
      <section className="mail-details">
        <MailFolderList />
        <section className="mail-details-content">
          <div className="mail-details-icons">
            <Link to={'/mail'} className="back-icon-mail-details">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <span
              className="trash-icon-mail-details"
              onClick={this.onDeleteMail}
            >
              <img src="../../../assets/img/mail/trash-icon.png" />
            </span>
          </div>
          <div className="subject">{subject}</div>
          <span className="date">{date}</span>
          <div className="to">
            to: <span>{to}</span>
          </div>
          <div className="from">
            from: <span>{from}</span>
          </div>
          <div className="body">{body}</div>
        </section>
      </section>
    )
  }
}
