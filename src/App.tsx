import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { toDark, toLight } from './features/theme/themeSlice'

function App() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  return (
    <main data-theme={theme}>
      <h1>{theme}</h1>
      {theme === 'dark' ? (
        <button onClick={() => dispatch(toLight())}>light</button>
      ) : (
        <button onClick={() => dispatch(toDark())}>dark</button>
      )}
    </main>
  )
}

export default App
