const { NavLink } = ReactRouterDOM

export function FilterByType() {
    return <section className="filter-by-type">
        <NavLink className="filter-container" to="/note/text"><img src="./assets/img/note/font.svg" /></NavLink>
        <NavLink className="filter-container" to="/note/video"><img src="./assets/img/note/video.svg" /></NavLink>
        <NavLink className="filter-container" to="/note/image"><img src="./assets/img/note/image.svg" /></NavLink>
        <NavLink className="filter-container" to="/note/list"><img src="./assets/img/note/list.svg" /></NavLink>
    </section>
}