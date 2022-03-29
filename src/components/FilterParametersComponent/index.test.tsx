import FilterParametersComponent from '.'
import { render, screen } from '../../test-utils'

describe('testing the filterParametersComponent', () => {
  it('should render the correct parameters', () => {
    render(<FilterParametersComponent value={'region'} />)

    expect(screen.getAllByTestId('filter_region_parameters')).toBeTruthy()
  })
  it('should render the correct parameters', () => {
    render(<FilterParametersComponent value={'shape'} />)

    expect(screen.getAllByTestId('filter_shape_parameters')).toBeTruthy()
  })
  it('should render the correct parameters', () => {
    render(<FilterParametersComponent value={'type'} />)

    expect(screen.getAllByTestId('filter_type_parameters')).toBeTruthy()
  })
})
