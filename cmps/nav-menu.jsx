const { Link } = ReactRouterDOM

export class NavMenu extends React.Component {

  render() {
    return (
      <section className="nav-menu">
        <Link to="/" className="nav-link-container">
          <img src="./assets/img/home-icon.png" alt="" className="home-icon" />
          <p>Home</p>
        </Link>
        <Link to="/mail/inbox" className="nav-link-container">
          <div>
            <img src="./assets/img/gmail-icon.png" alt="" />
          </div>
          <p>Email</p>
        </Link>
        <Link to="/note" className="nav-link-container">
          <div>
            <img src="./assets/img/note/logo-keep.png" alt="" />
          </div>
          <p>Keep</p>
        </Link>
        <Link to="/about" className="nav-link-container">
          <div>
            <img src="./assets/img/about-logo.svg" alt="" />
          </div>
          <p>About</p>
        </Link>
      </section>
    )
  }
}
