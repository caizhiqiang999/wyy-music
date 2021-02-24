import React, { memo } from 'react'

import ZQTopBanner from './top-banner'
import ZQHotRecommend from './hot-recommend'
import ZQNewAlbum from './new-album'
import ZQRanking from './ranking'
import { RecommendWrapper } from './style'


function ZQRecommend() {

  return (
    <div>
      <ZQTopBanner/>
      <RecommendWrapper className='wrap-v2'>
        <div className='left'>
          <ZQHotRecommend />
          <ZQNewAlbum />
          <ZQRanking />
        </div>
        <div className='right'></div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(ZQRecommend)

// function ZQRecommend(props) {

//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h1>ZQRecommend</h1>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(ZQRecommend))