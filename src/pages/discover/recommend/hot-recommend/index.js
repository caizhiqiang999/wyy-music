import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ZQHeaderRCM  from '../../../../components/header-rcm'
import ZQSongsCover from '../../../../components/songs-cover'
import { getHotRecommendAction } from '../store/actionCreators'
import { HotRecommendWrapper } from './style'

export default memo(function ZQHotRecommend() {

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ZQHeaderRCM title='热门推荐' itemLinks={['华语','流行','摇滚','民谣','电子']}/>
      <div className='hot-rcm'>
        {
          hotRecommends.map((item, index) => {
            return (
              <div key={item.id} className='icon'>
                <ZQSongsCover info={item}/>
                <p>{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <ZQHeaderRCM title='新碟上架' itemLinks={[]}/>
    </HotRecommendWrapper>
  )
})
