import React from 'react'
import { useAppSelector } from './Redux/app/hooks'
import Header from './components/Header'
import PokedexContainer from './components/PokedexContainer'

function App() {
  const theme = useAppSelector((state) => state.theme.value)

  return (
    <main data-theme={theme}>
      <Header />
      <h1>{theme}</h1>
      <PokedexContainer />
    </main>
  )
}

export default App
