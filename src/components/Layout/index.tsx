import { useEffect, useState } from 'react'
import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'
import styles from './Layout.module.scss'

const Layout = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <>
      {loading ? (
        <main className={styles.layout}>
          <Filter />
          <PokemonContainer />
        </main>
      ) : (
        'loading'
      )}
    </>
  )
}

export { Layout }
