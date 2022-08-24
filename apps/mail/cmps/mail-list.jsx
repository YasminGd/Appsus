import { MailPreview } from './mail-preview.jsx'

export function MailList(props) {
  const { mails } = props
  return (
    <ul className="mail-list">
      {mails && mails.map((mail) => <MailPreview key={mail.id} mail={mail} />)}
    </ul>
  )
}
