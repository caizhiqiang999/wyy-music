import React, { memo } from 'react'

import { HeaderRCMWrapper } from './style'

export default memo(function ZQHeaderRCM(props) {

  const { title, itemLinks } = props

  return (
    <HeaderRCMWrapper>
        <div>
          <div className='sprite_02'></div>
          <div>{title}</div>
        </div>
        <div className='content'>
          {
            itemLinks.map((item, index) => {
              if(index < 4) {
                return (
                  <div key={item}>
                    <a href='#/'>{item}</a>
                    <span>|</span>
                  </div>
                )
              } else {
                return (
                  <div key={item}>
                    <a href='#/'>{item}</a>
                  </div>
                )
              }
            })
          }
        </div>
        <div className='more'>
          <div>更多</div>
          <div className='sprite_02'></div>
        </div>
    </HeaderRCMWrapper>
  )
})
