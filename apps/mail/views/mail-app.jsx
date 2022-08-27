import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'
import { eventBusService } from '../../../services/event-bus.service.js'

export class MailApp extends React.Component {
  unsubscribe
  state = {
    mails: null,
    filterBy: null,
    filterType: '',
    isMailComposeOpen: false,
  }

  componentDidMount() {
    this.unsubscribe = eventBusService.on('update-mail-filter', (filterBy) =>
      this.setState({ filterBy }, () => this.loadMails())
    )

    this.onCheckNoteRecieved()

    if (this.props.match.params.mailType)
      this.updateTypeFilter(this.props.match.params.mailType)
    else this.loadMails()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.mailType !== this.props.match.params.mailType)
      this.updateTypeFilter(this.props.match.params.mailType)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  loadMails = () => {
    const { filterBy, filterType } = this.state
    mailService
      .query(filterBy, filterType)
      .then((mails) => this.setState({ mails }))
  }

  onRemoveMail = (ev, mailId) => {
    ev.preventDefault()
    ev.stopPropagation()
    mailService.removeMail(mailId).then((mail) => {
      if (mail) {
        this.loadMails()
        return
      }
      const mails = this.state.mails.filter((mail) => mail.id !== mailId)
      this.setState({ mails })
    })
  }

  onToggleStarredMail = (ev, mailId) => {
    ev.preventDefault()
    ev.stopPropagation()
    mailService.toggleStarredMail(mailId).then(this.loadMails)
  }

  onToggleReadMail = (ev, mailId) => {
    ev.preventDefault()
    ev.stopPropagation()
    mailService.toggleReadMail(mailId).then(this.loadMails)
  }

  onSetReadMail = (ev, mailId) => {
    mailService.setReadMail(mailId).then(this.loadMails)
  }

  onOpenMailCompose = (isOpen) => {
    if (isOpen) this.setState({ isMailComposeOpen: true })
    else this.setState({ isMailComposeOpen: false })
  }

  onGetUnreadMailsCount = () => {
    return mailService.getUnreadMailsCount()
  }

  updateTypeFilter = (mailType) => {
    this.setState({ filterType: mailType }, this.loadMails)
  }

  onCheckNoteRecieved = () => {
    const urlParams = new URLSearchParams(this.props.location.search)
    const title = urlParams.get('title')
    const subject = urlParams.get('subject')

    if (title || subject) {
      this.setState({ mail: { subject: title, body: subject } })
      this.onOpenMailCompose(true)
    }
  }

  render() {
    const { mails, isMailComposeOpen, mail } = this.state
    return (
      <section className="mail-app">
        <MailFolderList
          onOpenMailCompose={this.onOpenMailCompose}
          onGetUnreadMailsCount={this.onGetUnreadMailsCount}
        />
        <MailList
          mails={mails}
          onRemoveMail={this.onRemoveMail}
          onToggleStarredMail={this.onToggleStarredMail}
          onToggleReadMail={this.onToggleReadMail}
          onSetReadMail={this.onSetReadMail}
        />
        {isMailComposeOpen && (
          <MailCompose
            mailFromNote={mail}
            onOpenMailCompose={this.onOpenMailCompose}
            loadMails={this.loadMails}
          />
        )}
      </section>
    )
  }
}
