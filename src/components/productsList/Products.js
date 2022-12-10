import ProductDetails from "./ProductDetails"
import React from 'react';

function Products({pStock, pName, desc, isAvaliable, image, price}){
    return (
        <li className="list-group-item mb-2" style={{"borderRadius": 8, backgroundColor: isAvaliable ? 'white' : '#deddde'}}>
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{pName}</h5>
                    <p className="font-italic text-muted mb-0 small">{desc}</p>
                    <h6 className="font-weight-bold my-2">${price}.00</h6>
                    <ProductDetails stock={pStock} isAvaliable={isAvaliable}/>
                </div><img style={{"borderRadius": 10}} src={require("../../"+image)}
                alt="Imagem indisponível" width="130" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
    )
}

export default Products