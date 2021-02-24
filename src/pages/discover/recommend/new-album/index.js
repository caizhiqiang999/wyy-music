import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { getNewAlbumAction } from '../store/actionCreators'
import ZQHeaderRCM  from '../../../../components/header-rcm'
import { NewAlbumWrapper } from './style'

export default memo(function ZQNewAlbum() {

  const banner = useRef()
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ZQHeaderRCM title='新碟上架' itemLinks={[]}/>
      <div className='new-album'>
        <Carousel ref={banner} dots={false}>
          <div className='fpage'>
            {
              newAlbums.slice(0, 5).map((item, index) => {
                return (
                  <div className='show' key={item.picId}>
                    <div className='img'>
                      <img src={item.picUrl}></img>
                      <div className='bgc1 image_cover'></div>
                      <div className='bgc2'></div>
                    </div>
                    <p>not define</p>
                    <p>not define</p>
                  </div>
                )
              })
            }
          </div>
          <div className='spage'>
            {
              newAlbums.slice(5, 10).map((item, index) => {
                return (
                  <div className='show' key={item.picId}>
                    <div className='img'>
                      <img src={item.picUrl}></img>
                      <div className='bgc1 image_cover'></div>
                      <div className='bgc2'></div>
                    </div>
                    <p>not define</p>
                    <p>not define</p>
                  </div>
                )
              })
            }
          </div>
        </Carousel>
        <button className='sprite_02 left' onClick={e => banner.current.prev()}></button>
        <button className='sprite_02 right' onClick={e => banner.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
