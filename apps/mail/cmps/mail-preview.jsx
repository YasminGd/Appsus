const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
  console.log(`mail:`, mail)
  return (
    <Link to="/mail/singleMail">
      <article>mail preview</article>
    </Link>
  )
}
