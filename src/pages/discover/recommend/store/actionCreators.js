import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends } from '../../../../services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_TOP_RECOMMENDS,
  hotRecommends: res.result
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