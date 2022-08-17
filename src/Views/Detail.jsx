import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();

   const navigate = useNavigate();
    
    const [objeto, setObjeto] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res => setObjeto({...res.data}))
        .catch(err => console.log(err));
    },[id]);

    //Eleavación de estado para actualizar DOM
    const removeFromDom = productID =>{
        setObjeto(objeto.filter(objeto => objeto._id !== productID))
    }

    const deleteProduct = productID =>{
        //Código para hacer una petición Delete que borre al producto con identificador productID
        axios.delete('http://localhost:8000/api/product/'+productID)
        .then(res => {removeFromDom(productID)})
        .catch(err => console.log(err))
    }

    return(
        <div className='Detalle'>
            <h1>{objeto.productName}</h1>
            <p><b>Price:</b> {objeto.price}</p>
            <p><b>Description:</b> {objeto.description}</p>
            <p><Link to={"/"+objeto._id+"/edit"}>Edit</Link></p>
            <p><input className='boton' type="submit" value="Delete" onClick={e=>{deleteProduct(objeto._id); navigate('/product');}}/></p>
            <br/>
        </div>
    );
}

export default Detail;