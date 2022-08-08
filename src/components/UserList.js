import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers } from '../store/slices/users';

const UserList = () => {
  const { list: users } = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div className="container pt-5">
      <div className="row">
        {
          users.map((user, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={user.avatar} alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList