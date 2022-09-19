import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {


    return (
        <>
            <h1 className="productos">Productos</h1>
            <h3 className="greeting">{greeting}</h3>
        </>
    );
};

export default ItemListContainer;