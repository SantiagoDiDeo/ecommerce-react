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
import CartContext, {CartProvider} from './components/context/CartContext';
import { CacheProvider } from './components/context/CacheContext';
import Loader from './components/Loader';
import Favoritos from './components/Favoritos';
import { FavoritosProvider } from './components/context/FavoritosContext';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const database = getFirestore();
    
    const itemReference = doc(database, 'items', 'sMymXW9A91R6Y8jj80uM');
    getDoc(itemReference)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const item = {
                id: snapshot.id,
                ...snapshot.data()
              };
              console.log(item);
            };

          })
          .catch(error => console.warn(error))
  }, []);

  useEffect(() => {
    const database = getFirestore();

    const collectionReference = collection(database, 'items');
    getDocs(collectionReference)
            .then((snapshot) => {
              const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }))
              console.log(list)
            })
            .catch(error => console.warn(error))
  }, []);


  return (
    <BrowserRouter>
    <CacheProvider>
    <CartContext.Provider value={[]}>
      <div className='contenedor' style={{backgroundImage:`url(${fondo})`}}>
        <CartProvider>
        <NavBar />
        <FavoritosProvider>
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favourite' element={<Favoritos />} />
        </Routes>
        </FavoritosProvider>
        </CartProvider>
      </div>
      </CartContext.Provider>
      </CacheProvider>
      <Loader  />
    </BrowserRouter>
    

  );
};

export default App;
