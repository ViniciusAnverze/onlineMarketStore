import './App.css'
import React, {useState} from 'react';
import ProductsList from './components/productsList/ProductsList'
import CreateProduct from './components/createProduct/CreateProduct';
import FilterProduct from './components/filterProduct/FilterProduct';

const products = [
    {"pID": 1, 
    "pName": "Fresh Milk", 
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    "isAvailable": true,
    "image": "images/fresh-milk.png",
    "price": 12,
    "stock" : 1}, 
    {"pID": 2, 
    "pName": "Cottage Cheese", 
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    "isAvailable": false,
    "image": "images/cottage-cheese.png",
    "price": 10,
    "stock" : 8}, 
    {"pID": 3, 
    "pName": "Brocoli", 
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    "isAvailable": true,
    "image": "images/brocoli.png",
    "price": 15,
    "stock" : 14}, 
    {"pID": 4, 
    "pName": "oranges", 
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    "isAvailable": true,
    "image": "images/oranges.png",
    "price": 20,
    "stock" : 2}, 
    {"pID": 5, 
    "pName": "Olive oil", 
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    "isAvailable": false,
    "image": "images/olive-oil.png",
    "price": 14,
    "stock" : 20}
]


function App(){ //usar ctrl d para selecionar
    
    let [fullList, setFullList] = useState(products)
    let [filtervalue, setFiltervalue] = useState('all')
    
    function getProduct(product){
        product.pID = (fullList.length + 1)
        setFullList([product, ...fullList]) 
    }

    let filteredProductList = fullList.filter((product) => {
        if(filtervalue == 'available'){
            return product.isAvailable === true
        }else if(filtervalue == 'unavailable'){
            return product.isAvailable === false
        }else{
            return product;
        }
    })

    function getAvailable(value){
        setFiltervalue(value)
    }

    return (
        <>
        <CreateProduct getNewProduct={getProduct}/>
        <FilterProduct getAvailable={getAvailable}/>
        <ProductsList fullList={filteredProductList}/>
        </>
    )
    
}

export default App;