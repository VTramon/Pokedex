import userEvent from '@testing-library/user-event'
import PokemonContainer from '.'
import { render, screen } from '../../test-utils'

describe('testing the PokemonContainer component', () => {
  it('should be rendered', () => {
    render(<PokemonContainer />)

    const container = screen.getByTestId('Pokemon-container')

    expect(container).toBeInTheDocument()
  })

  it('should render the cards', async () => {
    render(<PokemonContainer />)

    const cards = await screen.findAllByTestId('Pokemon-card')

    expect(cards).toBeTruthy()
  })

  it('should render more cards when click the button', async () => {
    render(<PokemonContainer />)

    const button = screen.getByTestId('container-button')

    userEvent.click(button)
    const cards = await screen.findAllByTestId('Pokemon-card')

    expect(cards.length).toBeGreaterThan(10)
  })
})
