import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import {CartProvider} from './components/context/CartContext';
import Loader from './components/Loader';
import image from './backgroundImg.jpg'


function App() {

  return (
    <BrowserRouter>
    <div style={{ backgroundImage: `url(${image})` }}>
        <CartProvider>
          <NavBar />
                <Routes>
                  <Route path='/' element ={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />} />
                  <Route path='/item/:id' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
              </Routes>
        </CartProvider>
      <Loader  />
    </div>
    </BrowserRouter>

  );
};

export default App;
