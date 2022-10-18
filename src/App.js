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
import CartContext from './components/context/CartContext';
import { CacheProvider } from './components/context/CacheContext';
import Loader from './components/Loader';



function App() {

  return (
    <BrowserRouter>
    <CacheProvider>
    <CartContext.Provider value={[]}>
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
      </CartContext.Provider>
      </CacheProvider>
      <Loader  />
    </BrowserRouter>
    

  );
};

export default App;
