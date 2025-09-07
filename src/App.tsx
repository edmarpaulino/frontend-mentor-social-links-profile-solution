import './App.scss'
import { Avatar, SocialLink } from './components'
import avatarImage from './assets/images/avatar-jessica.jpeg'
import Card from './components/Card'

type LinkData = {
  readonly label: string
  readonly url: string
}

const links: LinkData[] = [
  {
    label: 'GitHub',
    url: 'https://github.com'
  },
  {
    label: 'Frontend Mentor',
    url: 'https://www.frontendmentor.io'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com'
  }
]

function App() {
  return (
    <main className="profile-page">
      <Card className="profile">
        <div className="profile__header">
          <Avatar src={avatarImage} alt="Jessica Randall" />
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
        </div>

        <p className="profile__description">
          "Front-end developer and avid reader."
        </p>

        <ul className="profile__links">
          {links.map(({ label, url }) => (
            <li key={label}>
              <SocialLink href={url}>{label}</SocialLink>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  )
}

export default App
