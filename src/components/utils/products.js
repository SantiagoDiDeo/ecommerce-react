

    const products = [
        {id: 1, title: 'Protector bucal', category:'proteccion', description:'Protector bucal de silicona. Colores disponibles: Negro, rojo, verde, transparente.', price: 100, stock: 5, pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACk2uaLx_08rw4F6XrYYEa7i2ZLWINlJBNQ&usqp=CAU'},
        {id: 2, title: 'Guantes Protectores Sparring Gran Marc ', category:'proteccion', description:'Tipo de cierre: velcro. Colores disponibles: Rojo. Talles disponibles: 2, 3, 4, 5.', price: 100, stock: 3, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_774833-MLA50683761321_072022-O.webp'},
        {id: 3, title: 'Pads Gran Marc', category:'proteccion', description:'Protectores de pie/pads. Colores disponibles: Azul, rojo. Talles: 2, 3, 4, 5.', price: 100, stock: 4, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_836751-MLA45640106647_042021-O.webp'},
        {id: 4, title: 'Protector cabezal gran Marc', category:'proteccion', description:'Cabezal protector gladiador', price: 100, stock: 6, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_923758-MLA49373729676_032022-V.webp'},
        {id: 5, title: 'Protector tibial Gran Marc', category:'proteccion', description:'Colores disponibles: Rojo. Talles disponibles: 1, 2, 3.', price: 100, stock: 6, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_805962-MLA31115592928_062019-O.webp'},
        {id: 6, title: 'Remera azul', category:'ropa', description:'Talles disponibles: XS, S, M, L, XL ', price: 100, stock: 7, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_998860-MLA50879326101_072022-O.webp'},
        {id: 7, title: 'Remera blanca', category:'ropa', description:'Talles disponibles: XS, S, M, L, XL', price: 100, stock: 8, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_739953-MLA50879331112_072022-O.webp'},
        {id: 8, title: 'Remera roja', category:'ropa', description:'Talles disponibles: XS, S, M, L, XL', price: 100, stock: 3, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_671774-MLA50879228574_072022-O.webp'},
        {id: 9, title: 'Short negro', category:'ropa', description:'Talles disponibles: 40, 42, 44, 46', price: 100, stock: 4, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_617182-MLA45333377764_032021-W.webp'},
        {id: 10, title: 'Short azul', category:'ropa', description:'Talles disponibles: 40, 42, 44, 46', price: 100, stock: 1, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_664788-MLA45333415179_032021-O.webp'}
    ];


const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    });
    return promise
};


const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id));
        setTimeout(() =>{
            return resolve(result);
        },2000);
        
    });

    return promise
};


const getProductsByCategory = (categoryName) => {
    const promise = new Promise ((resolve) => {
        const results = products.filter((product) => product.category === categoryName);
        setTimeout(() => {
            return resolve(results);
        }, 2000);
    });
    return promise
};



export {getAllProducts, getProduct, getProductsByCategory}; 