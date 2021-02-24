import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends() {
  return request({
    url: '/personalized?limit=8'
  })
}

export function getNewAlbums() {
  return request({
    url: '/top/album?limit=10'
  })
}

export function getRankings(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}