const { Link } = ReactRouterDOM

export class NavMenu extends React.Component {

    // componentDidMount() {
    //     document.body.addEventListener('click', () => console.log('helow'))
    // }

    // componentWillUnmount() {
    //     document.body.removeEventListener('click', this.props.closeNav)
    // }

    render() {
        return <section className="nav-menu">
            <Link exact to="/" className="nav-link-container">
                <img src="./../../assets/img/home_icon.png" alt="" />
                <p>Home</p>
            </Link>
            <Link to="/mail" className="nav-link-container">
                <img src="./../../assets/img/gmail_icon.png" alt="" />
                <p>Email</p>
            </Link>
            <Link to="/note" className="nav-link-container">
                <img src="./../../assets/img/note/logo_keep.png" alt="" />
                <p>Keep</p>
            </Link>
            <Link to="/about" className="nav-link-container">
                <img src="./../../assets/img/about-logo.svg" alt="" />
                <p>About</p>
            </Link>
        </section>
    }

}