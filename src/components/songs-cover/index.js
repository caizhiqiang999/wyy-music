import React, { memo } from 'react'
import { dealWithData } from '../../utils'

import { SongsCoverWrapper } from './style'
export default memo(function ZQSongsCover(props) {
  
  const { info } = props

  return (
    <SongsCoverWrapper>
      <div className='song-top'>
        <img src={info.picUrl}></img>
        <div className='sprite_cover cover'></div>
        <div className='sprite_cover info'>
          <div className='sprite_icon'></div>
          <div>{dealWithData(info.playCount)}</div>
          <div className='sprite_icon'></div>
        </div>
      </div>
    </SongsCoverWrapper>
  )
})
