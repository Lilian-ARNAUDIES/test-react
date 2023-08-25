import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserModal from './components/UserModal';

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Thomas', lastName: 'DUPONT', age: 25, gender: 'Homme' },
    { id: 2, firstName: 'Jade', lastName: 'PUIT', age: 30, gender: 'Femme' },
    { id: 3, firstName: 'Alex', lastName: 'BAGUETTE', age: 22, gender: 'Homme' },
    { id: 4, firstName: 'Léo', lastName: 'DUPERD', age: 27, gender: 'Homme' },
    { id: 5, firstName: 'Gabriel', lastName: 'PIERRE', age: 21, gender: 'Homme' },
    { id: 6, firstName: 'Raphaël', lastName: 'NADAL', age: 35, gender: 'Homme' },
    { id: 7, firstName: 'Juliette', lastName: 'RALE', age: 25, gender: 'Femme' },
    { id: 8, firstName: 'Louis', lastName: 'ROI', age: 40, gender: 'Homme' },
    { id: 9, firstName: 'Mourad', lastName: 'POTIER', age: 35, gender: 'Homme' },
    { id: 10, firstName: 'Julia', lastName: 'MOULIN', age: 55, gender: 'Femme' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false); 

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setShowAddForm(false); 
  };

  const updateUser = (updatedUser) => {
    openModal(updatedUser)
    const updatedUsers = users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
  
    setUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    closeModal();
  };

  const openModal = (userId) => {
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <button onClick={() => setShowAddForm(true)}>Ajouter un utilisateur</button>
      {showAddForm && <AddUserForm addUser={addUser} />}
      <h1>Liste d'utilisateurs</h1>
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
      {selectedUser && (
        <UserModal
          user={selectedUser}
          updateUser={updateUser}
          deleteUser={deleteUser}
          showModal={showModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
