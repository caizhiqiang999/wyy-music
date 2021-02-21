import React from 'react'
import { Redirect } from 'react-router-dom'


import ZQDiscover from '../pages/discover'
import ZQFriend from '../pages/friend'
import ZQMine from '../pages/mine'
import ZQDownload from '../pages/download'

import ZQRecommend from '../pages/discover/recommend'
import ZQRanking from '../pages/discover/ranking'
import ZQSongs from '../pages/discover/songs'
import ZQDjradio from '../pages/discover/djradio'
import ZQArtist from '../pages/discover/artist'
import ZQAlbum from '../pages/discover/album'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover',
    component: ZQDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path: '/discover/recommend',
        component: ZQRecommend
      },
      {
        path: '/discover/ranking',
        component: ZQRanking
      },
      {
        path: '/discover/songs',
        component: ZQSongs
      },
      {
        path: '/discover/djradio',
        component: ZQDjradio
      },
      {
        path: '/discover/artist',
        component: ZQArtist
      },
      {
        path: '/discover/album',
        component: ZQAlbum
      }
    ]
  },
  {
    path: '/friend',
    component: ZQFriend
  },
  {
    path: '/mine',
    component: ZQMine
  },
  {
    path: '/download',
    component: ZQDownload
  }
]

export default routes