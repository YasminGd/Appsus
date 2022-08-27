const { Link } = ReactRouterDOM

export class NavMenu extends React.Component {
  // componentDidMount() {
  //     document.body.addEventListener('click', () => console.log('helow'))
  // }

  // componentWillUnmount() {
  //     document.body.removeEventListener('click', this.props.closeNav)
  // }

  render() {
    return (
      <section className="nav-menu">
        <Link exact to="/" className="nav-link-container">
          <img src="./assets/img/home-icon.svg" alt="" className="home-icon" />
          <p>Home</p>
        </Link>
        <Link to="/mail/inbox" className="nav-link-container">
          <div>
            <img src="./assets/img/gmail_icon.svg" alt="" />
          </div>
          <p>Email</p>
        </Link>
        <Link to="/note" className="nav-link-container">
          <div>
            <img src="./assets/img/note/logo_keep.png" alt="" />
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
