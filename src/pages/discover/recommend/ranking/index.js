import React, { memo, useEffect } from 'react'

import { RankingWrapper } from './style'
import ZQHeaderRCM from '../../../../components/header-rcm'
import ZQTopRanking from '../../../../components/top-ranking'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getRankingAction } from '../store/actionCreators'

export default memo(function ZQRanking() {

  const { upRankings, newRankings, originRankings } = useSelector(state => ({
    upRankings: state.get('recommend').get('upRankings'),
    newRankings: state.get('recommend').get('newRankings'),
    originRankings: state.get('recommend').get('originRankings')
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankingAction(0))
    dispatch(getRankingAction(2))
    dispatch(getRankingAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ZQHeaderRCM title='榜单' itemLinks={[]} />
      <div className='show'>
        <ZQTopRanking info={upRankings} />
        <ZQTopRanking info={newRankings} />
        <ZQTopRanking info={originRankings} />
      </div>
    </RankingWrapper>
  )
})
