import { MainSearch } from "./main-search.jsx"
import { NavBar } from "./nav-bar.jsx"

const { Link, NavLink, withRouter } = ReactRouterDOM

export function _AppHeader({ location }) {
    const isMainSearchShown = location.pathname === '/note' || location.pathname === '/mail'

    return < header className="app-header" >
        <div className="left">
            <div className="logo">
                <img src="./../../assets/img/note/logo_keep.png" alt="" />
                <p>Keep</p>
            </div>
            {isMainSearchShown && <MainSearch currentPage={location.pathname} />}
        </div>
        <NavBar />
    </ header>
}

export const AppHeader = withRouter(_AppHeader)