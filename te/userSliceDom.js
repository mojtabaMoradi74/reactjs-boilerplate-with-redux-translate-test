import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectUser, selectUserFetchStatus } from './userSlice'

export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const userFetchStatus = useSelector(selectUserFetchStatus)

  return (
    <div>
      {/* Display the current user name */}
      <div>{user}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === 'loading' && <div>Fetching user...</div>}
    </div>
  )
}