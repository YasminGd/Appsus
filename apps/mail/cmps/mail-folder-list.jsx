const { NavLink } = ReactRouterDOM

export class MailFolderList extends React.Component {
  render() {
    return (
      <section className="mail-folder-list">
        <section className="fixed-mail-folder-list">
          <div className="compose-mail">
            <img src="../../../assets/img/mail/compose-icon.png" alt="" />
            <span>Compose</span>
          </div>
          <NavLink to="/mail/inbox">
            <div>
              <img src="../../../assets/img/mail/inbox-open-icon.png" alt="" />
            </div>
          </NavLink>
        </section>
      </section>
    )
  }
}
