import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function UserModal({ user, updateUser, deleteUser, showModal, closeModal }) {
    const [editedUser, setEditedUser] = useState(user);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevUser => ({
        ...prevUser,
        [name]: value,
        }));
    };

    const handleSave = () => {
        updateUser(editedUser);
        closeModal();
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modifier ou supprimer le profil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label>Prénom : </label>
                    <input type="text" name="firstName" value={editedUser.firstName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Nom : </label>
                    <input type="text" name="lastName" value={editedUser.lastName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Âge : </label>
                    <input type="number" name="age" value={editedUser.age} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Genre : </label>
                    <select name="gender" value={editedUser.gender} onChange={handleInputChange}>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Fermer
                </Button>
                <Button variant="warning" onClick={handleSave}>
                    Sauvegarder
                </Button>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;
