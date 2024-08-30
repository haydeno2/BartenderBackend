import React from 'react';

const Header = ({onPlaceClick,onCheckClick}) => {
  return (
    <header style={headerStyle}>
      <h1>Bartender App</h1>
      <button style={buttonStyle} onClick={onPlaceClick}>Place an Order</button>
      <button style={buttonStyle} onClick={onCheckClick}>Check Orders</button>
    </header>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  zIndex: 1000, 
};

const buttonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Header;