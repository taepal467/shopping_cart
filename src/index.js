import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import {Cart} from './components/Cart'

function App() {
  return (
      <BrowserRouter basename="/shopping_cart">
        <Routes>
          <Route path='/' element={ <Navbar /> }>
          <Route index element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          <Route path='/cart' element={ <Cart /> } />
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


