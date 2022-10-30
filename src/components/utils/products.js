import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "@firebase/firestore";

const getAllProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    
    return getDocs(collectionReference)
            .then( snapshot => {
                const list = snapshot.docs.map( (doc) => ( {
                    id: doc.id,
                    ...doc.data()
                  } ) );
                  return list;
            })
            .catch(error => console.warn(error));
};


const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
            .then( snapshot => {
                if( snapshot.exists() ) {
                    const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };   
                return item; 
            };
            } );
};


const getProductsByCategory = (categoryName) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryName))   

    return getDocs(collectionQuery)
            .then( snapshot => {
                if( snapshot.size === 0 )
                return [];
                const list = snapshot.docs.map( (doc) => ( {
                    id: doc.id,
                    ...doc.data()
                  } ) );
                  return list;
            })
            .catch( error => console.warn(error) );
};


export { getAllProducts, getProduct, getProductsByCategory }; 