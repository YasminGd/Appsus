import { utilService } from '../../../services/util.service.js'
const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
  console.log(`mail:`, mail)
  const { from, to, subject, body, sentAt, isRead, id } = mail
  const isReadClassName = isRead ? 'read' : 'unread'
  return (
    <Link to="/mail/singleMail">
      <article className="mail-preview">
        <div className="star">
          <img src="../../../assets/img/mail/star-icon.png" alt="" />
        </div>
        <span className="mail-address">{from}</span>
        <div className="mail-content">
          <span className="mail-subject">{subject}</span> -
          <span className="mail-body">{body}</span>
        </div>
        <span className="mail-date">
          {utilService.getFormattedTime(sentAt)}
        </span>
      </article>
    </Link>
  )
}
