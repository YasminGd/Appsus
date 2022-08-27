export function Logo({ page }) {
  let logoSrc = ''
  let name = ''
  if (page.includes('/note')) {
    logoSrc = 'note/logo_keep.png'
    name = 'Keep'
  } else if (page.includes('/mail')) {
    logoSrc = 'gmail_icon.svg'
    name = 'Email'
  } else if (page === '/about') {
    logoSrc = 'about-logo.svg'
    name = 'About'
  } else {
    logoSrc = 'logo-bigger.png'
    name = 'Appsus'
  }

  return (
    <section className="logo">
      <img src={`./assets/img/${logoSrc}`} alt="" />
      <p>{name}</p>
    </section>
  )
}
