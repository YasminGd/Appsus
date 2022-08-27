import { Logo } from "./Logo.jsx"
import { MainSearch } from "./main-search.jsx"
import { NavBar } from "./nav-bar.jsx"

const { withRouter } = ReactRouterDOM

export function _AppHeader({ location }) {
    const isMainSearchShown = location.pathname.includes('/note') || location.pathname.includes('/mail')

    return < header className="app-header" >
        <div className="left">
            <Logo page={location.pathname} />
            {isMainSearchShown && <MainSearch currentPage={location.pathname} />}
        </div>
        <NavBar />
    </ header>
}

export const AppHeader = withRouter(_AppHeader)