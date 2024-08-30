import React from 'react';

const ItemList = ({ items }) => {
  // Ensure items is an array
  if (!Array.isArray(items)) {
    console.error('Expected items to be an array');
    return <p>Error: Data is not an array</p>;
  }

  return (
    <ul>
      {items.length > 0 ? (
        items.map(item => (
          <li key={item.number}>
            {item.number}: {item.contents}
          </li>
        ))
      ) : (
        <p>No items available</p>
      )}
    </ul>
  );
};

export default ItemList;
