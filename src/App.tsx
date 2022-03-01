import React from 'react'
import { useAppSelector } from './Redux/app/hooks'
import Header from './components/Header'
import PokemonContainer from './components/PokemonContainer'

function App() {
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <main data-theme={theme}>
      <Header />
      <PokemonContainer />
    </main>
  )
}

export default App
