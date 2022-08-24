const { NavLink } = ReactRouterDOM

export class MailFolderList extends React.Component {
  render() {
    return (
      <section className="mail-folder-list">
        <section className="fixed-mail-folder-list">
          <div className="compose-mail">
            <img
              src="../../../assets/img/mail/compose-icon.png"
              className="compose-img"
            />
            <span>Compose</span>
          </div>
          <NavLink to="/mail/inbox">
            <div>
              <img src="../../../assets/img/mail/inbox-open-icon.png" alt="" />
              <span>Inbox</span>
            </div>
          </NavLink>
          <NavLink to="/mail/starred">
            <div>
              <img src="../../../assets/img/mail/star-icon.png" alt="" />
              <span>Starred</span>
            </div>
          </NavLink>
          <NavLink to="/mail/sent">
            <div>
              <img src="../../../assets/img/mail/sent-icon.png" alt="" />
              <span>Sent</span>
            </div>
          </NavLink>
          <NavLink to="/mail/trash">
            <div>
              <img src="../../../assets/img/mail/trash-icon.png" alt="" />
              <span>Trash</span>
            </div>
          </NavLink>
          <NavLink to="/mail/trash">
            <div>
              <img src="../../../assets/img/mail/drafts-icon.png" alt="" />
              <span>Drafts</span>
            </div>
          </NavLink>
        </section>
      </section>
    )
  }
}
