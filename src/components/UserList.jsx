import React from 'react';
import User from './User';

function UserList({ users, updateUser, deleteUser }) {
  return (
    <div className="row mt-5">
      {users.map((user) => (
        <div key={user.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <User user={user} updateUser={updateUser} deleteUser={deleteUser} />
        </div>
      ))}
    </div>
  );
}

export default UserList;