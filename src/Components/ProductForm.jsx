import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {

    const {addToDom} = props;
    const [productName,setProductname] = useState("");
    const [price,setPrice] = useState();
    const [description,setDescription] = useState("");
    const [statusCreation, setStatusCreation] = useState("");

    

    const onSubmitHandler = e => {
        //Manejador de Submit
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new',{productName,price,description})
        .then(res => {
            console.log('Peticion exitosa',res);
            addToDom(res.data.insertedProduct);
            setProductname("");
            setPrice("");
            setDescription("");
            setStatusCreation("Product has been successfully created");
        })
        .catch(err => {
            console.log("Petición fallida",err);
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p className='formulario'>
                <label>Title: </label>
                <input  className='cuadrot' type="text" onChange={(e)=>setProductname(e.target.value)} value={productName}/>
            </p>
            <p className='formulario'>
                <label>Price: </label>
                <input className='cuadrot' type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p className='formulario'> 
                <label>Description: </label>
                <input  type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <p className='creation'>{statusCreation}</p>
            <input type="submit" value="Create" className='boton'/>
        </form>
    )

}

export default ProductForm;