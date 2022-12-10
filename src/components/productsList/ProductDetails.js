import React, {useState} from 'react';
import Button from './Button';

function availability(tf){
    let Avaliable = tf;
    let res;
    if(Avaliable){
        return res={
            text: "available",
            classe: "badge bg-success"
        }
        
    }else{
        return res={
            text: "unavailable",
            classe: "badge bg-danger"
        }
    }
}

function ProductDetails({isAvaliable, stock}){

    let [sumProducts, setSumProducts] = useState(0);
    function sumProduct(){
        if(sumProducts == 0){
            return 'zero'
        }else{
            return sumProducts
        }
    }
    function increase(){
        setSumProducts(++sumProducts)
    }
    function decrease(){
        setSumProducts(--sumProducts)
    }
    return (
        
        <div className="d-flex align-items-center justify-content-start mt-1">
            <Button clicar={decrease} desabilitar={sumProducts === 0}>-</Button>
            <p className='px-3'>{sumProduct()}</p>
            <Button clicar={increase} desabilitar={sumProducts === stock}>+</Button>
            <span className={availability(isAvaliable).classe+" ms-3"}>{availability(isAvaliable).text}</span>
        </div>

    )
}

export default ProductDetails;