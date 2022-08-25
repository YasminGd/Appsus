import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'

export class MailApp extends React.Component {
  state = {
    mails: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadMails()
  }

  loadMails = () => {
    const { filterBy } = this.state
    mailService.query(filterBy).then((mails) => this.setState({ mails }))
  }

  onRemoveMail = (ev, mailId) => {
    ev.preventDefault()
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
    mailService.toggleStarredMail(mailId).then(this.loadMails)
  }

  render() {
    const { mails } = this.state
    return (
      <section className="mail-app">
        {/* <MailFilter /> */}
        <MailFolderList />
        <MailList
          mails={mails}
          onRemoveMail={this.onRemoveMail}
          onToggleStarredMail={this.onToggleStarredMail}
        />
        {/* <MailCompose /> */}
      </section>
    )
  }
}
