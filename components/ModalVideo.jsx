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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
          </svg>
        </button>
        <br />
        <br />
        <p><iframe width="300" height="315" src="https://www.youtube.com/embed/U-NVAOMLqnE?si=QMAMH0ihBMlN6Fqu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
      </div>
    </div>
  );
};

export default Modal;
