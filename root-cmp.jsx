import { AppHeader } from './cmps/app-header.jsx'
import { About } from './views/about.jsx'
import { Home } from './views/home.jsx'
import { MailApp } from './apps/mail/views/mail-app.jsx'
import { NoteApp } from './apps/note/views/note-app.jsx'
import { MailDetails } from './apps/mail/views/mail-details.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Switch>
          <Route path="/mail/details/:mailId" component={MailDetails} />
          <Route path="/mail/:mailType" component={MailApp} />
          <Route path="/mail" component={MailApp} />
          <Route path="/note/new-note" component={NoteApp} />
          <Route path="/note/:noteType?" component={NoteApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </section>
    </Router>
  )
}
