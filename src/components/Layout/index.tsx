// import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'

const Layout = () => {
  return (
    <main>
      {/* <Filter /> */}
      <PokemonContainer parameters={{ region: 'Sinnoh' }} />
    </main>
  )
}

export { Layout }
