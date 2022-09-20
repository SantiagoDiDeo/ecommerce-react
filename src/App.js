import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import fondo from './fondo.jpg';


function App() {
  return (
    <div className='contenedor' style={{backgroundImage:`url(${fondo})`}}>
      <NavBar />
      <ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />
    </div>
  );
};

export default App;
