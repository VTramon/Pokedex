import { render, screen } from '../../test-utils'
import PokemonContainer from '.'
import userEvent from '@testing-library/user-event'

describe('testing the pokemonContainer component', () => {
  it('should be rendered', () => {
    render(<PokemonContainer />)

    const container = screen.getByTestId('pokemon-container')

    expect(container).toBeInTheDocument()
  })
  it('should render the cards', async () => {
    render(<PokemonContainer />)

    const cards = await screen.findAllByTestId('pokemon-card')

    expect(cards).toBeTruthy()
  })
  it('should render more cards when clikc the button', async () => {
    render(<PokemonContainer />)

    const button = screen.getByTestId('container-button')

    userEvent.click(button)
    const cards = await screen.findAllByTestId('pokemon-card')

    expect(cards.length).toBeGreaterThan(10)
  })
})
