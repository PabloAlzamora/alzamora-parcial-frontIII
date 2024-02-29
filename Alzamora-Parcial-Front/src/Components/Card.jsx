import React from 'react';

const Card = ({ nombre, tenista }) => {
  return (
    <div>
      <h2>Datos:</h2>
      <p>Nombre: {nombre}</p>
      <p>Tenista más odiado: {tenista}</p>
    </div>
  );
};

export default Card;
