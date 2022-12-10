import { Button } from 'bootstrap'
import React,{ useState } from 'react'
import Form from './Form'

function CreateProduct(props){

    let [formShowing, setFormShowing] = useState(false)

    function liftProduct(product){
        props.getNewProduct(product)
    }

    function addProduct(){
        setFormShowing(true);
    }

    function cancel(){
        setFormShowing(false);
    }

    return(
        <div className='row'>
            <div className='col-md-8 mx-auto' style={{backgroundColor: "white", borderRadius: 8, padding: "10px 20px", marginBottom: 20}}>
                {!formShowing ? <button onClick={addProduct} className='btn btn-primary' >Add product</button> : <Form liftProduct={liftProduct} cancel={cancel}/>}
            </div>
        </div>
    )
}

export default CreateProduct