import { LazyExoticComponent, Suspense } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom'
import { appRoutes, defaultUnauthenticatedRoute } from './routesNavigation'

interface ROUTE_TYPE {
  Page: LazyExoticComponent<() => JSX.Element>
  path: string
  needAuth: boolean
}

const isAuthenticated = () => false

const getRoute = ({ Page, path, needAuth }: ROUTE_TYPE) => {
  if (needAuth) {
    return (
      <Route
        key={path}
        path={path}
        element={
          isAuthenticated() ? (
            <Page />
          ) : (
            <Navigate
              key={path}
              to={{
                pathname: defaultUnauthenticatedRoute,
              }}
            />
          )
        }
      />
    )
  }
  return <Route key={path} path={path} element={<Page />} />
}

const allAppRoutes = Object.values(appRoutes)

const routes = allAppRoutes.map((route) => {
  return getRoute(route)
})

const ApplicationRouter = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>{routes}</Routes>
    </Suspense>
  </Router>
)

export default ApplicationRouter
