import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums, getRankings } from '../../../../services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_TOP_RECOMMENDS,
  hotRecommends: res.result
})
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_NEWALBUM,
  newAlbums: res.albums
})
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRankings: res.playlist
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRankings: res.playlist
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRankings: res.playlist
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommends().then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}
export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbums().then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
export const getRankingAction = (idx) => {
  return dispatch => {
    getRankings(idx).then((res) => {
      switch(idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break
        case 2:
          dispatch(changeNewRankingAction(res))
          break
        case 3:
          dispatch(changeOriginRankingAction(res))
          break
        default:
      }
    })
  }
}