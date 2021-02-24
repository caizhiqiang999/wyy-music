import React, { memo } from 'react'

import { RankingWrapper } from './style'
import ZQHeaderRCM from '../../../../components/header-rcm'

export default memo(function ZQRanking() {
  return (
    <RankingWrapper>
      <ZQHeaderRCM title='榜单' itemLinks={[]} />
    </RankingWrapper>
  )
})
