import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function AddUserForm({ addUser }) {
  const [showModal, setShowModal] = useState(false); 
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
    });
    setShowModal(false); 
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Ajouter un utilisateur</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouvel utilisateur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Prénom : </label>
                <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} />
              </div>
              <div>
                <label>Nom : </label>
                <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} />
              </div>
              <div>
                <label>Âge : </label>
                <input type="number" name="age" value={newUser.age} onChange={handleInputChange} />
              </div>
              <div>
                <label>Genre : </label>
                <select name="gender" value={newUser.gender} onChange={handleInputChange}>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
              <button type="submit">Ajouter</button>
            </form>
          </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddUserForm;