import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from '../store/actionCreators'
import { Carousel } from 'antd'

import { TopBannerWrapper } from './style'

export default memo(function ZQTopBanner() {

  const bannerRef = useRef()
  const [bannerIndex, setBannerIndex] = useState(0)
  const bannerChange = useCallback((from, to) => {
    setBannerIndex(to)
  }, [])

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bgImage = topBanners[bannerIndex] && (topBanners[bannerIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className='wrap-v2 banner'>
        <div className='left'>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div key={item.imageUrl}>
                    <a href='#/'>
                      <img src={item.imageUrl}></img>
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='right'></div>
        <button className='btn-left' onClick={e => bannerRef.current.prev()}></button>
        <button className='btn-right' onClick={e => bannerRef.current.next()}></button>
      </div>
    </TopBannerWrapper>
  )
})
