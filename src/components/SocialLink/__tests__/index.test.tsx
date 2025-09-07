import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import SocialLink from '..'

describe('SocialLink', () => {
  it('renders a link with correct href and children', () => {
    const href = 'https://example.com'
    const linkText = 'Example'
    render(<SocialLink href={href}>{linkText}</SocialLink>)

    const linkElement = screen.getByRole('link', { name: linkText })
    expect(linkElement).toHaveAttribute('href', href)
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <SocialLink href="https://example.com">Example</SocialLink>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
