import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails }) {
    return <ul className="mail-list">{
        mails.map(mail => <MailPreview mail={mail} />)
    }
    </ul>
}