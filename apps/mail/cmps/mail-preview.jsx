const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    return <Link to="/mail/singleMail"><article>
        mail preview
    </article></Link>
}