import React, { useState } from 'react';

const Contador = () => {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;
