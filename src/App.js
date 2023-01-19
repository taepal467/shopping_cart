import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbar /> }>
          <Route index element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
