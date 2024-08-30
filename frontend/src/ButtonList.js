import React from 'react';

const ButtonList = ({ onOrder, data }) => {
  return (
    <div className="button-list">
      {data.length > 0 ? (
        data.map((item, index) => (
          <button 
            key={index} 
            style={buttonStyle}
            onClick={() => onOrder(item)} 
          >
            {item}
          </button>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

export default ButtonList;
