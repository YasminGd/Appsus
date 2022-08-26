import { utilService } from '../../../services/util.service.js'
const { Link } = ReactRouterDOM

export function MailPreview({ mail, props }) {
  // console.log(`mail:`, mail)
  const { from, to, subject, body, sentAt, isRead, isStarred, id } = mail
  const starredClassName = isStarred ? 'yellow' : 'empty'
  const { onRemoveMail, onToggleStarredMail, onToggleReadMail } = props
  const isReadClassName = isRead ? 'read' : 'unread'
  return (
    <Link to={`/mail/${mail.id}`}>
      <article className={`${isReadClassName} mail-preview`}>
        <div
          className="star-img-container"
          onClick={(ev) => onToggleStarredMail(ev, id)}
        >
          <img
            src={`../../../assets/img/mail/${starredClassName}-star-icon.png`}
            alt=""
          />
        </div>
        <span className={`mail-address ${isReadClassName}`}>{from}</span>
        <div className="mail-content">
          <span className={`mail-subject ${isReadClassName}`}>{subject}</span> -
          <span className="mail-body">{body}</span>
        </div>
        <span className={`mail-date ${isReadClassName}`}>
          {utilService.getFormattedTime(sentAt)}
        </span>
        <div
          className="trash-img-container"
          onClick={(ev) => onRemoveMail(ev, id)}
        >
          <img src="../../../assets/img/mail/trash-icon.png" />
        </div>
        <div
          className="read-img-container"
          onClick={(ev) => onToggleReadMail(ev, id)}
        >
          <img src={`../../../assets/img/mail/${isReadClassName}-icon.png`} />
        </div>
      </article>
    </Link>
  )
}
