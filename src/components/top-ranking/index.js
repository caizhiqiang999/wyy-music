import React, { memo } from 'react'

import { TopRankingWrapper } from './style'

export default memo(function ZQTopRanking(props) {

  const { info } = props
  const { tracks = [] } = info

  return (
    <TopRankingWrapper>
      <div className='ranking'>
        <div className='pic'>
          <div className='img'>
            <img src={info.coverImgUrl} alt=''/>
            <div className='image_cover'></div>
          </div>
          <div className='right'>
            <p>{info.name}</p>
            <div className='logo'>
              <div className='play sprite_02'></div>
              <div className='add sprite_02'></div>
            </div>
          </div>
        </div>
        <div className='songp'>
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className='songs'>
                <p className={index < 3 ? 'active' : ''}>{index + 1}</p>
                <a href='#/' className='text-nowrap'>{item.name}</a>
                  <div className='mark'>
                    <div className='btn mark-left sprite_02'></div>
                    <div className='btn mark-middle sprite_icon2'></div>
                    <div className='btn mark-right sprite_02'></div>
                  </div>
              </div>
            )
          })
        }
        </div>
        <a href='#/' className='find'>{'查看全部>'}</a>
      </div>
    </TopRankingWrapper>
  )
})
