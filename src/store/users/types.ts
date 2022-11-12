export interface USER_TYPE {
  id: number
  name: string
  username: string
  email: string
}

export interface USERS_STATE_TYPE {
  data: USER_TYPE[]
  error: string
  loading: boolean
}
