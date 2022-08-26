import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'
import { eventBusService } from '../../../services/event-bus.service.js'

export class MailApp extends React.Component {
  unsubscribe
  state = {
    mails: null,
    filterBy: null,
    isMailComposeOpen: false,
  }

  componentDidMount() {
    this.unsubscribe = eventBusService.on('update-mail-filter', (filterBy) =>
      this.setState({ filterBy }, () => this.loadMails())
    )

    this.loadMails()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  loadMails = () => {
    const { filterBy } = this.state
    mailService.query(filterBy).then((mails) => this.setState({ mails }))
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

  render() {
    const { mails, isMailComposeOpen } = this.state
    return (
      <section className="mail-app">
        {/* <MailFilter /> */}
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
            onOpenMailCompose={this.onOpenMailCompose}
            loadMails={this.loadMails}
          />
        )}
      </section>
    )
  }
}
