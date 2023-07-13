import React from 'react';

const NoMatch = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <h1
      style={{
        fontSize: '120px',
        color: 'red',
      }}
    >
      404
    </h1>
    <p
      style={{
        fontSize: '45px',
      }}
    >
      Сторінка не знайдена
    </p>
  </div>
);

export default NoMatch;
