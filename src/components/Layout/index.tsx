import { useState } from 'react'
import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <main className={styles.layout}>
      <Filter />
      <PokemonContainer />
    </main>
  )
}

export { Layout }
