import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import fondo from './fondo.jpg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className='contenedor' style={{backgroundImage:`url(${fondo})`}}>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
