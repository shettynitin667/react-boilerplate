type URLBuilder = (...args: string[]) => string

const apiUrls = {
  getUsers: '/users',
  getUserDetails: <URLBuilder>((id) => `/users/${id}`),
}

export default apiUrls
