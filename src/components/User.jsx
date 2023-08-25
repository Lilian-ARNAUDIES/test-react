import React from 'react';

function User({ user, updateUser, deleteUser }) {
  return (
    <li className="list-group-item border" onClick={() => updateUser(user.id)}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
            <img src="../images/avatar.png" alt="user-photo"/>
            <p className="font-weight-bold m-0">{`${user.firstName} ${user.lastName}`}</p>
            <p className="m-0">Age : {user.age}</p>
            <p className="m-0">Genre : {user.gender}</p>
        </div>
      </div>
    </li>
  );
}

export default User;