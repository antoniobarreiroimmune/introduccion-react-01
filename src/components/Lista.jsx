import React from 'react';

const Lista = ({ param }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {param.length > 0 ? (
          param.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>La lista está vacía</li>
        )}
      </ul>
    </div>
  );
};

export default Lista;
