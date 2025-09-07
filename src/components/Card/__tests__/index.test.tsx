import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Card from '..'

describe('Card', () => {
  it('renders children and applies custom className', () => {
    const customClass = 'my-custom-card'
    render(
      <Card className={customClass}>
        <div>Child Content</div>
      </Card>
    )

    const cardElement = screen.getByText('Child Content').parentElement
    expect(cardElement).toHaveClass('card', customClass)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Card>
        <div>Child Content</div>
      </Card>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
