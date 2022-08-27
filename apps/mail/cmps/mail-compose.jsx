import { mailService } from '../services/mail.service.js'

export class MailCompose extends React.Component {
  state = {
    mail: {
      id: null,
      subject: null,
      body: null,
      sentAt: null,
      to: null,
    },
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState((prevState) => ({
      mail: { ...prevState.mail, [field]: value, sentAt: Date.now() },
    }))
  }

  onSendMail = (ev) => {
    ev.preventDefault()
    mailService.sendMail(this.state.mail).then(this.props.loadMails)
    this.onCloseMailCompose()
  }

  onCloseMailCompose = () => {
    this.props.onOpenMailCompose(false)
  }

  render() {
    return (
      <section className="mail-compose">
        <div className="mail-compose-heading">
          <span className="title">New Message</span>
          <span className="close-compose-btn" onClick={this.onCloseMailCompose}>
            &times;
          </span>
        </div>
        <form className="mail-compose-form">
          <div className="compose-to">
            <textarea
              maxLength="65"
              name="to"
              placeholder="To"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="compose-subject">
            <textarea
              maxLength="65"
              name="subject"
              placeholder="Subject"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="compose-body">
            <textarea name="body" onChange={this.handleChange}></textarea>
          </div>
          <div className="compose-actions">
            <button
              className="compose-send-btn"
              onClick={(ev) => this.onSendMail(ev)}
            >
              Send
            </button>
            <div
              className="compose-delete-btn-container"
              onClick={this.onCloseMailCompose}
            >
              <img
                className="compose-delete-btn"
                src="./assets/img/mail/trash-icon.png"
                alt=""
              />
            </div>
          </div>
        </form>
      </section>
    )
  }
}
