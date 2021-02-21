import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { discoverMenu } from '../../common/local-data'
import { DiscoverWrapper } from './style'

export default memo(function ZQDiscover(props) {

  const { route } = props

  const discoverList = (item, index) => {
    return (
      <NavLink to={item.link}>{item.title}</NavLink>
    )
  }

  return (
    <div>
      <DiscoverWrapper>
        <div className='wrap-v2'>
          <div className='c-1'>
            {
              discoverMenu.map((item, index) => {
                return (
                  <div key={item.id} className='c-2'>{discoverList(item, index)}</div>
                )
              })
            }
          </div>
        </div>
    </DiscoverWrapper>
    {renderRoutes(route.routes)}
    </div>
  )
})
