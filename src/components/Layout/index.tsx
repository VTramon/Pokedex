import { useEffect, useState } from 'react'
import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'
import SearchBar from '../SearchBar'
import styles from './Layout.module.scss'

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
