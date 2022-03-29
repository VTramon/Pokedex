import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'
import SearchBar from '../SearchBar'
import styles from './styles.module.scss'

const Layout = () => {
  return (
    <main className={styles.layout}>
      <SearchBar />
      <Filter />
      <PokemonContainer />
    </main>
  )
}

export { Layout }
