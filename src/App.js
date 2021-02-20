import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import ZQAppHeader from './components/app-header'
import ZQAppFooter from './components/app-footer'
export default memo(function App() {
  return (
    <BrowserRouter>
      <ZQAppHeader/>
      {renderRoutes(routes)}
      <ZQAppFooter/>
    </BrowserRouter>
  )
})
