import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Root from './routes'
import store from './redux/store'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
)
