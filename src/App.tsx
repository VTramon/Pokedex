import React from 'react'
import { useAppSelector } from './Redux/app/hooks'
import Header from './components/Header'
import PokemonContainer from './components/PokemonContainer'

function App() {
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <main data-theme={theme}>
      <Header />
      <h1>{theme}</h1>
      <PokemonContainer />
    </main>
  )
}

export default App
