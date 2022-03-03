import { useState } from 'react'
import Filter from '../Filter'
import PokemonContainer from '../PokemonContainer'
import { useAppSelector } from '../../Redux/app/hooks'

const Layout = () => {
  const region = useAppSelector((state) => state.filter.region)

  return (
    <main>
      <Filter />
      <PokemonContainer parameters={{ region: region }} />
    </main>
  )
}

export { Layout }
