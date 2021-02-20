import ZQDiscover from '../pages/discover'
import ZQFriend from '../pages/friend'
import ZQMine from '../pages/mine'
import ZQDownload from '../pages/download'

const routes = [
  {
    path: '/',
    exact: true,
    component: ZQDiscover
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