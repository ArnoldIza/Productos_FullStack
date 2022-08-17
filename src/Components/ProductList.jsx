import React from 'react';
import { Link } from 'react-router-dom';
import axios from  'axios'

const ProductList = (props) =>{
    const {product, removeFromDom} = props;

    const deleteProduct = productID =>{
        //Código para hacer una petición Delete que borre al prodcuto con identificador productID
        axios.delete('http://localhost:8000/api/product/'+productID)
        .then(res => removeFromDom(productID))
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>All Product</h1>
            {
                product.map((objeto,idx)=> {
                    return(
                        <p key={idx}><Link to={"/"+objeto._id}>{objeto.productName}</Link> <button onClick={e=> deleteProduct(objeto._id)}>Delete</button></p>
                    )
                })
            }
        </div>
    );
}

export default ProductList;