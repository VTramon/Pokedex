import Filter from '.'
import { render, screen } from '../../test-utils'

describe('testing the filter component', () => {
  it('should render the filter section', () => {
    render(<Filter />)

    const region = screen.getByTestId('region_filter_button')
    const type = screen.getByTestId('type_filter_button')
    const shape = screen.getByTestId('shape_filter_button')

    expect(region).toBeVisible()
    expect(type).toBeVisible()
    expect(shape).toBeVisible()
  })
})
