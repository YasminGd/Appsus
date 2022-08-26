export class MailCompose extends React.Component {
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
            <button className="compose-send-btn">Send</button>
            <img
              className="compose-delete-btn"
              src="../../../assets/img/mail/trash-icon.png"
              alt=""
            />
          </div>
        </form>
      </section>
    )
  }
}
