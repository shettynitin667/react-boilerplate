import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USERS_STATE_TYPE, USER_TYPE } from './types'

const initialState: USERS_STATE_TYPE = {
  data: [],
  error: '',
  loading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: () => {
      // Empty function comment
    },
    setUsers: (state, { payload }: PayloadAction<USER_TYPE[]>) => {
      state.data = payload
    },
  },
})

export const { reducer, actions } = usersSlice
