import { lazy } from 'react'
import { HOME, ABOUT, LOGIN } from './routes'

export const defaultAuthenticatedRoute = HOME
export const defaultUnauthenticatedRoute = LOGIN

const Home = lazy(() => import('views/Home' /* webpackChunkName: "HomePage" */))

const About = lazy(
  () => import('views/About' /* webpackChunkName: "AboutPage" */)
)

const Login = lazy(
  () => import('views/Login' /* webpackChunkName: "LoginPage" */)
)

export const appRoutes = {
  home: {
    needAuth: false,
    path: HOME,
    Page: Home,
  },
  about: {
    needAuth: true,
    path: ABOUT,
    Page: About,
  },
  login: {
    needAuth: false,
    path: LOGIN,
    Page: Login,
  },
}
