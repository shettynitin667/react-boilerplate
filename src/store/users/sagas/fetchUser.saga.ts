import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'services'
import apiUrls from 'services/apiUrls'
import { actions } from '../slice'

export function* handleFetchUsers(): unknown {
  try {
    const { data } = yield call(API.get, apiUrls.getUsers)
    yield put(actions.setUsers(data))
  } catch (e) {
    console.error(e)
  }
}

export default takeLatest(actions.fetchUsers, handleFetchUsers)
