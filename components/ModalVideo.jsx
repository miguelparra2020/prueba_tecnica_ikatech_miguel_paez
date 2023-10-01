import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    zIndex: 999, // Asegura que el modal esté por encima de todo
    transition: 'opacity 0.3s ease',
    opacity: isOpen ? 1 : 0,
  };

  const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles}>
      <div style={contentStyles}>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Contenido del Modal</h2>
        <p>Aquí puedes colocar cualquier contenido que desees en tu modal.</p>
      </div>
    </div>
  );
};

export default Modal;
