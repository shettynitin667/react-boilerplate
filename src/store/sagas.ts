import { SagaMiddleware } from 'redux-saga'
import { all, ForkEffect } from 'redux-saga/effects'

// eslint-disable-next-line @typescript-eslint/ban-types
const runSagas = (
  middleware: SagaMiddleware<object>,
  sagas: ForkEffect<never>[] = []
): void => {
  function* rootSaga() {
    yield all(sagas)
  }

  middleware.run(rootSaga)
}

export default runSagas
