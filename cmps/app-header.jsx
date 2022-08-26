import { MainSearch } from "./main-search.jsx"
import { NavBar } from "./nav-bar.jsx"

const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <div className="left">
            <div className="logo">
                <img src="./../../assets/img/note/logo_keep.png" alt="" />
                <p>Keep</p>
            </div>
            <MainSearch />
        </div>
        <NavBar />
    </header>
}
