import { render, screen } from '../../test-utils'
import Header from '.'

describe('testing the header component', () => {
  it('should render the header', () => {
    render(<Header />)
    const header = screen.getByTestId('header')

    expect(header).toBeVisible()
  })
})
