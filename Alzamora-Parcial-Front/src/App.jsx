import React, { useState } from 'react';
import Card from './Components/Card';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [tenista, setTenista] = useState('');
  const [error, setError] = useState('');
  const [Submitted, setSubmitted] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setSubmitted(false);
  };  
  
  const handleTenistaChange = (e) => {
    setTenista(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(true);
      return;
    }

    if (tenista.trim().length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(true);
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Parcial Front III C1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
        
        <label htmlFor="tenista">Tenista más odiado:</label>
        <input type="text" id="tenista" value={tenista} onChange={handleTenistaChange} />
        
        <button type="submit">Enviar</button>
      </form>
      
      {error && Submitted && <p>{error}</p>}
      
      {!error && Submitted && nombre && tenista && <Card nombre={nombre} tenista={tenista} />}
    </div>
  );
};

export default App;
