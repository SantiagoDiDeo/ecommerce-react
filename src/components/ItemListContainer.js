import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {


    return (
        <div className='tituloSaludo'>
            <h1 className="productos">Productos</h1>
            <h3 className="greeting">{greeting}</h3>
        </div>
    );
};

export default ItemListContainer;