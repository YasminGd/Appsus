import { utilService } from '../../../services/util.service.js'
import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { mailService } from '../services/mail.service.js'
const { Link } = ReactRouterDOM

export class MailDetails extends React.Component {
  state = {
    mail: null,
    isMailComposeOpen: false,
  }

  componentDidMount() {
    this.loadMail()
  }

  loadMail = () => {
    const { mailId } = this.props.match.params
    mailService.getMailById(mailId).then((mail) => {
      this.setState({ mail })
    })
  }

  onRemoveMail = () => {
    const { id } = this.state.mail
    mailService.removeMail(id).then(this.onGoBack())
  }

  onGoBack = () => {
    this.props.history.push('/mail')
  }

  onGetUnreadMailsCount = () => {
    return mailService.getUnreadMailsCount()
  }

  onOpenMailCompose = (isOpen) => {
    if (isOpen) this.setState({ isMailComposeOpen: true })
    else this.setState({ isMailComposeOpen: false })
  }

  onSendAsNote = (mail) => {
    console.log(`this.props:`, this.props)
    const { subject, body } = mail
    const params = utilService.getUrlByParams({
      title: subject,
      subject: body,
    })
    console.log(`this.props.history:`, this.props.history)
    console.log(`params:`, params)
    const path = `/note/new-note${params}`
    this.props.history.push(path)
  }

  // onSendAsMail = (ev, note) => {
  //   ev.stopPropagation()
  //   const msgBody = noteService.getInputNameAndVal(note.type)
  //   const { title } = note.info
  //   const params = utilService.getUrlByParams({
  //     title,
  //     subject: note.info[msgBody],
  //   })
  //   const path = `mail/new-mail/${params}`
  //   this.props.history.push(path)
  // }

  render() {
    const { mail, isMailComposeOpen } = this.state
    if (!mail) return <div></div>
    const { body, from, sentAt, to, subject } = mail
    const date = utilService.getFormattedTime(sentAt)
    return (
      <section className="mail-details">
        <MailFolderList
          onGetUnreadMailsCount={this.onGetUnreadMailsCount}
          onOpenMailCompose={this.onOpenMailCompose}
        />
        <section className="mail-details-content">
          <div className="mail-details-icons">
            <Link to={'/mail/inbox'} className="back-icon-mail-details">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <span
              className="trash-icon-mail-details"
              onClick={this.onRemoveMail}
            >
              <img src="./assets/img/mail/trash-icon.png" />
            </span>
            <span
              className="send-mail-details"
              onClick={() => this.onSendAsNote(mail)}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </div>
          <div className="mail-details-text">
            <div className="subject">{subject}</div>
            <div className="from-date-container">
              <div className="from">
                <span>{from}</span>
              </div>
              <span className="date">{date}</span>
            </div>
            <div className="body">{body}</div>
          </div>
        </section>
        {isMailComposeOpen && (
          <MailCompose
            onOpenMailCompose={this.onOpenMailCompose}
            loadMails={this.loadMails}
          />
        )}
      </section>
    )
  }
}
