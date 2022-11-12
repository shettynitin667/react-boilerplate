import { Reducer } from '@reduxjs/toolkit'
import { ForkEffect } from 'redux-saga/effects'

export interface IStoreModule {
  sagas: ForkEffect<never>[]
  reducer: Reducer
  middleware: any[] // eslint-disable-line
}
