import HomePage from '<pages>/HomePage'
import ViewComment from '<pages>/ViewComment'

const routes = {
  default: [{
      exact: true,
      path: '/',
      component: HomePage
    },
    {
      path: '/:commentId',
      component: ViewComment
    }
  ]
}
export default routes