//prettier-ignore
import { updateNoteFilter, updateMailFilter } from './../services/event-bus.service.js'
const { withRouter } = ReactRouterDOM

class _MainSearch extends React.Component {
  state = {
    currentPage: '',
    noteFilter: '',
    mailFilter: '',
  }

  componentDidMount() {
    this.setState({ currentPage: this.props.currentPage })
  }

  componentDidUpdate() {
    if (this.state.currentPage !== this.props.currentPage)
      this.setState({
        currentPage: this.props.currentPage,
        noteFilter: '',
        mailFilter: '',
      })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value }, this.updateFilter)
  }

  updateFilter = () => {
    if (this.state.currentPage === '/note')
      updateNoteFilter(this.state.noteFilter)
    else updateMailFilter(this.state.mailFilter)
  }

  render() {
    const filter =
      this.state.currentPage === '/note' ? 'noteFilter' : 'mailFilter'

    return (
      <section className="main-search-container">
        <div className="search-icon-container">
          <svg
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </svg>
        </div>
        <input
          className="main-search"
          type="search"
          placeholder="Search"
          value={this.state[filter]}
          name={filter}
          onChange={this.handleChange}
        />
      </section>
    )
  }
}

export const MainSearch = withRouter(_MainSearch)
