import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRankings: {},
  newRankings: {},
  originRankings: {}
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_TOP_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_TOP_NEWALBUM:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRankings', action.upRankings)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRankings', action.newRankings)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRankings', action.originRankings)
    default:
      return state
  }
}

export default reducer