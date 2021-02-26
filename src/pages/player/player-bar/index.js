import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PlayerBarWrapper, Operator } from './style'
import { getCurrentSongAction } from '../store/actionCreator'
import { changeTime, playSrc } from '../../../utils/index'
import { Slider } from 'antd'

export default memo(function ZQPlayerBar() {

  const [currentTime, setcurrentTime] = useState(0)
  const [nowTime, setNowTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playRef = useRef()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentSongAction(167876))
  }, [dispatch])
  useEffect(() => {
    playRef.current.src = playSrc(167876)
  }, [currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0

  const playSong = () => {
    isPlaying ? playRef.current.pause() : playRef.current.play()
    setIsPlaying(!isPlaying)
  }
  const getCurrentTime = (e) => {
    if(!isChanging) {
      setcurrentTime(e.target.currentTime * 1000)
      setNowTime(parseInt(((currentTime) / duration) * 100))
    }
  }
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration / 1000
    setcurrentTime(currentTime * 1000)
    setNowTime(value)
  }, [])
  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    playRef.current.currentTime = currentTime
    setcurrentTime(currentTime * 1000)
    setIsChanging(false)

    if(!isPlaying) {
      playSong()
    }
  }, [duration, isPlaying, playSong])
  return (
    <PlayerBarWrapper className='sprite_playbar' isPlaying={isPlaying}>
      <div className='wrap-v2 player-bar'>
        <div className='player'>
          <button className='sprite_playbar prev'></button>
          <button className='sprite_playbar play' onClick={e => playSong()}></button>
          <button className='sprite_playbar next'></button>
        </div>
        <div className='progress'>
          <div className='img'>
            <img src={picUrl}/>
          </div>
          <div className='progress-right'>
            <div className='detail'>
              <span>{currentSong.name}</span>
              <span>{singerName}</span>
            </div>
            <div className='show'>
              <Slider value={nowTime}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}>
              </Slider>
              <div className='time'>
                <span>{changeTime(currentTime)}</span>
                <span className='cut'>/</span>
                <span>{changeTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={playRef} onTimeUpdate={e => getCurrentTime(e)}></audio>
    </PlayerBarWrapper>
  )
})
