import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {


    return (
        <div className='tituloSaludo'>
            <h1 className="productos" style={{textAlign:'center'}}>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
        </div>
    );
};

export default ItemListContainer;