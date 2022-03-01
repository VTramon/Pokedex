import { render, screen } from '../../test-utils'

import PokemonCard from '.'

describe('testing the PokemonCard component', () => {
  it('should render the content', () => {
    render(
      <PokemonCard
        img="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-Pok%C3%A9mon-PNG.png"
        alt="imagem do pikachu"
        name="pikachu"
      />
    )

    expect(screen.getByRole('img')).toBeVisible()
    expect(screen.getByRole('heading')).toBeVisible()
  })
})
