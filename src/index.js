import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import {Cart} from './components/Cart'
import data from "./components/inventoryData";
import { Checkout } from './components/Checkout';

function App() {

  const [cartItems, setCartItems] = React.useState([]);

  const onAddItem = (item) => {
    const itemDoesExist = cartItems.find(x => x.id === item.id);
      if(itemDoesExist) {
        setCartItems(
          cartItems.map(x => 
              x.id === item.id ? {...itemDoesExist, qty: itemDoesExist.qty + 1} : x
            )
        );
      } else {
        setCartItems([...cartItems, {...item, qty: 1}]);
      }
  }

  const onRemoveItem = (item) => {
    const itemDoesExist = cartItems.find(x => x.id === item.id);
      if(itemDoesExist.qty === 1) {
        setCartItems(
          cartItems.filter(x => x.id !== item.id )
        );
      } else {
        setCartItems(
          cartItems.map(x => 
              x.id === item.id ? {...itemDoesExist, qty: itemDoesExist.qty - 1} : x
            )
        );
      }
  }

  const refreshPage = () => {
    setTimeout(function(){
      window.location.reload();
   }, 1000);
  }
  
  return (
      <BrowserRouter basename="/shopping_cart">
        <Routes>
          <Route path='/' element={ <Navbar countCartItems={cartItems.length} />}>
          <Route index element={ <Home /> } />
          <Route path='/shop' element={ <Shop onAddItem={onAddItem} onRemoveItem={onRemoveItem} data={data} /> } />
          <Route path='/cart' element={ <Cart onAddItem={onAddItem} onRemoveItem={onRemoveItem} refreshPage={refreshPage} cartItems={cartItems} /> } />
          <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;


