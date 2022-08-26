const { NavLink } = ReactRouterDOM

export class MailFolderList extends React.Component {
  render() {
    console.log(`this.props:`, this.props)
    const { onOpenMailCompose, onGetUnreadMailsCount } = this.props
    let unreadMailsCount = onGetUnreadMailsCount()
    unreadMailsCount = unreadMailsCount === 0 ? '' : unreadMailsCount
    console.log(`unreadMailsCount:`, unreadMailsCount)
    return (
      <section className="mail-folder-list">
        <section className="fixed-mail-folder-list">
          <div className="compose-mail" onClick={() => onOpenMailCompose(true)}>
            <img
              src="../../../assets/img/mail/compose-icon.png"
              className="compose-img"
            />
            <span>Compose</span>
          </div>
          <div className="mail-types-container">
            <NavLink to="/mail/inbox">
              <div className="mail-type">
                <img
                  className="mail-type-img"
                  src="../../../assets/img/mail/inbox-open-icon.png"
                  alt=""
                />
                <span className="type">Inbox</span>
                <span className="amount">{unreadMailsCount}</span>
              </div>
            </NavLink>
            <NavLink to="/mail/starred">
              <div className="mail-type">
                <img
                  className="mail-type-img"
                  src="../../../assets/img/mail/empty-star-icon.png"
                  alt=""
                />
                <span className="type">Starred</span>
              </div>
            </NavLink>
            <NavLink to="/mail/sent">
              <div className="mail-type">
                <img
                  className="mail-type-img"
                  src="../../../assets/img/mail/sent-icon.png"
                  alt=""
                />
                <span className="type">Sent</span>
              </div>
            </NavLink>
            <NavLink to="/mail/trash">
              <div className="mail-type">
                <img
                  className="mail-type-img"
                  src="../../../assets/img/mail/trash-icon.png"
                  alt=""
                />
                <span className="type">Trash</span>
              </div>
            </NavLink>
          </div>
        </section>
      </section>
    )
  }
}
