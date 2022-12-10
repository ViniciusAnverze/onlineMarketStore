import React, {useState} from 'react'

function Form(props){
    console.log("teste pra ver quantas vezes carrega o componente")
    let [pName, setName] = useState('');
    let [pPrice, setPrice] = useState('');
    let [pDescription, setDescription] = useState('');
    let [pChecked, setChecked] = useState(false);
    let [pImageUrl, setImageUrl] = useState('');
    let [pStock, setStock] = useState('');

    //let [product, productInput] = useState({pName: '', pPrice: '', pDescription: '', pChecked: '', pImageUrl: ''});

    //function nameInput(event){
        //productInput({...product, pName: event.target.value})

        //productNameInput((prevState) => {
        //    return {...prevState, pName: event.target.value}
        //})
    //}

    function createProduct(event){
        event.preventDefault();
        let product = {"pID": 1, 
        "pName": pName, 
        "desc": pDescription,
        "isAvailable": Boolean(pChecked),
        "image": pImageUrl,
        "price": Number(pPrice),
        "stock": Number(pStock)}

        setName('');
        setPrice('');
        setDescription('');
        setChecked(false);
        setImageUrl('');
        setStock('');

        props.liftProduct(product)
        props.cancel()
    }

    return (
        <form className="row g-3" onSubmit={createProduct}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name" 
                        value={pName}
                        onChange={(event) => {setName(event.target.value)}}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price"
                        value={pPrice}
                        onChange={(event) => {setPrice(event.target.value)}}/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description"
                        value={pDescription}
                        onChange={(event) => {setDescription(event.target.value)}} />
            </div>

            <div className="form-group">
                <label htmlFor="stock">Product stock</label>
                <input type="text" 
                        className="form-control" 
                        id="stock" 
                        placeholder="Product stock"
                        value={pStock}
                        onChange={(event) => {setStock(event.target.value)}} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pChecked}
                onChange={(event) => {setChecked(event.target.checked)}} />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={pImageUrl}
                onChange={(event) => {setImageUrl(event.target.value)}} />
            </div>
            
            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="button" onClick={props.cancel} className="btn btn-danger">Cancel</button>
        </form>
    )
}

export default Form