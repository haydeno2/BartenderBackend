import React, { useState } from 'react';
import Header from './Header';
import ButtonList from './ButtonList';
import ItemList from './itemList';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [data, setData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [showItemList, setShowItemList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const placeOrder = (drink) =>{
    axios.post(`http://localhost:3001/${encodeURIComponent(drink)}`)
  }

  const handlePlaceClick = () => {
    axios.get('http://localhost:3001')
      .then(response => {
        setData(response.data);
        setShowItemList(false);
        setShowMenu(true);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCheckClick = () => {
    axios.get('http://localhost:3001/orders')
    .then(response => {
      setOrderData(response.data);
      setShowItemList(true);
      setShowMenu(false);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="app-container">
      <Header onPlaceClick={handlePlaceClick} onCheckClick={handleCheckClick} />
      <div className="content">
        {showMenu && <ButtonList onOrder={placeOrder} data={data} />}
        {showItemList && <ItemList items={orderData} />}
      </div>
    </div>
  );
};

export default App;
