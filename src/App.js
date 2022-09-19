import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import fondo from './fondo.jfif';


function App() {
  return (
    <div style={{ backgroundImage:`url(${fondo})`}}>
      <NavBar />
      <ItemListContainer greeting={'~ Bienvenidos al Shop de Total Vision Sports ~'} />
    </div>
  );
};

export default App;
