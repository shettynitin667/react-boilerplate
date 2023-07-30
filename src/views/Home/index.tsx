import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { useEffect } from 'react'
import { actions as userAction } from 'store/users'
import { Link } from 'react-router-dom'
import { ABOUT } from 'router/routes'
const Home = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.data)
  useEffect(() => {
    dispatch(userAction.fetchUsers())
  }, [])
  return (
    <>
      <h2>Users: </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link to={ABOUT}>About </Link>
    </>
  )
  // return <div>Home</div>
}

export default Home
