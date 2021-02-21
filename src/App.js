import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import ZQAppHeader from './components/app-header'
import ZQAppFooter from './components/app-footer'
export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ZQAppHeader/>
        {renderRoutes(routes)}
        <ZQAppFooter/>
      </BrowserRouter>
    </Provider>
  )
})
