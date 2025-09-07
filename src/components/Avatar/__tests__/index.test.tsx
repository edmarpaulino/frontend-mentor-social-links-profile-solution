import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Avatar from '..'

describe('Avatar', () => {
  it('renders the avatar image with correct src and alt', () => {
    const src = 'avatar.jpg'
    const alt = 'User Avatar'
    render(<Avatar src={src} alt={alt} />)

    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toHaveAttribute('src', src)
    expect(avatarImage).toHaveAttribute('alt', alt)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<Avatar src="avatar.jpg" alt="User Avatar" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
