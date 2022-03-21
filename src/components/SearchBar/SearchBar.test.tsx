import SearchBar from '.'
import { render, screen } from '../../test-utils'

describe('testing the searchBar component', () => {
  it('should be visible', () => {
    render(<SearchBar />)

    expect(screen.getByTestId('search_input')).toBeVisible()
  })
  it('should have a data list', () => {
    render(<SearchBar />)

    expect(screen.getByTestId('search_datalist')).toBeInTheDocument()

    expect(screen.findAllByTestId('search_datalist_options')).toBeTruthy()
  })
})
