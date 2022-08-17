import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update= () =>{
    const {id} = useParams();
    const [productName, setProductname] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>{setProductname(res.data.productName); setPrice(res.data.price); setDescription(res.data.description)})
        .catch(err => console.log(err))
    },[id])

    const handlerUpdateProduct = e => {
        //Función para realizar una petición PUT y actualizar un producto
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/'+id, {productName,price,description})
        .then(res =>{ console.log(res); navigate('/product');})
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Updating a product</h1>
                <form onSubmit={handlerUpdateProduct}>
                    <p className='formulario'>
                        <label>Title: </label>
                        <input className='cuadrot' type="text" onChange={(e)=>setProductname(e.target.value)} value={productName}/>
                    </p>
                    <p className='formulario'>
                        <label>Price: </label>
                        <input className='cuadrot' type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </p>
                    <p className='formulario'>
                        <label>Description: </label>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                    </p>
                    <input className='boton' type="submit" value="Update"/>
                </form>
        </div>
    );
}

export default Update;