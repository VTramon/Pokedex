import React from 'react'
import { useAppSelector } from '../Redux/app/hooks'
import PokemonContainer from '../components/PokemonContainer'
import Header from '../components/Header'
import { Layout } from '../components/Layout'

function App() {
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <div id="__content" data-theme={theme}>
      <Header />
      <Layout />
    </div>
  )
}

export default App
