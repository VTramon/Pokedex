import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import { render as originalRender } from '@testing-library/react'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import filterSlice from './Redux/features/filter/filterSlice'
import themereducer from './Redux/features/theme/themeSlice'

function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    store = configureStore({
      reducer: { theme: themereducer, filter: filterSlice },
    }),
  } = {}
) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return originalRender(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { render }
