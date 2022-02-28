import React, { FC } from 'react'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/user-event'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import themereducer from '../Redux/features/theme/themeSlice'

function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  { store = configureStore({ reducer: { theme: themereducer } }) } = {}
) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { render }
