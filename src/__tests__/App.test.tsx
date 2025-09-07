import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import App from '../App'

describe('App', () => {
  it('renders the App component with correct information', () => {
    render(<App />)

    // Check if a heading is rendered
    const heading = screen.getByRole('heading', { name: /Jessica Randall/i })
    expect(heading).toBeInTheDocument()

    // Check if location is rendered
    const location = screen.getByText(/London, United Kingdom/i)
    expect(location).toBeInTheDocument()

    // Check if description is rendered
    const description = screen.getByText(
      /"Front-end developer and avid reader."/i
    )
    expect(description).toBeInTheDocument()
  })

  it('renders all social links', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })

  it('renders social links with correct labels and hrefs', () => {
    render(<App />)

    const githubLink = screen.getByRole('link', { name: /GitHub/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com')

    const frontendMentorLink = screen.getByRole('link', {
      name: /Frontend Mentor/i
    })
    expect(frontendMentorLink).toHaveAttribute(
      'href',
      'https://www.frontendmentor.io'
    )

    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i })
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com')

    const twitterLink = screen.getByRole('link', { name: /Twitter/i })
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com')

    const instagramLink = screen.getByRole('link', { name: /Instagram/i })
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com')
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
