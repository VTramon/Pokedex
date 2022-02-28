import { render, screen } from './test-utils'
import Header from '../components/Header'

describe('testing the header component', () => {
  it('should render the header', () => {
    render(<Header />)
    const header = screen.getByTestId('header')

    expect(header).toBeVisible()
  })
})
