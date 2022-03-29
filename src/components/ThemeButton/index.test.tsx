import userEvent from '@testing-library/user-event'
import ThemeButton from '.'
import { render, screen } from '../../test-utils'

describe('testing the theme button', () => {
  it('should change the theme on click', () => {
    render(<ThemeButton />)
    const lightButton = screen.queryByRole('button', { name: 'white' })
    const darkButton = screen.queryByRole('button', { name: 'dark' })
    if (darkButton) {
      userEvent.click(darkButton)
      const button = screen.getByRole('light', { name: 'dark' })
      expect(button).toBeVisible()
    }
    if (lightButton) {
      userEvent.click(lightButton)
      const button = screen.getByRole('button', { name: 'dark' })
      expect(button).toBeVisible()
    }
  })
})
