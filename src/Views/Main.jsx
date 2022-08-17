import React, {useState, useEffect} from 'react'
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'
import axios from 'axios';

const Main = () =>{
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(
        ()=>{
            axios.get('http://localhost:8000/api/products')
            .then(res => {setProduct(res.data)});
            setLoaded(true);
    },[]);

    //Eleavación de estado para actualizar DOM
    const removeFromDom = productId =>{
        setProduct(product.filter(objeto => objeto._id !== productId))
    }

    const addToDom = newProduct => {
        setProduct([...product,newProduct])
    }

    return(
        <div>
            <ProductForm addToDom={addToDom}/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
} 

export default Main;