//import Produtos from '../../produtos.json'
import Products from './Products'

function productsList(props){
    if(props.fullList.length === 0){
        return <h3 className='bg-white col-md-4 mx-auto text-center' style={{borderRadius: '8px'}}>No products in this category</h3>
    }
    return (
        <div className='row'> 
            <div className='col-lg-8 mx-auto'>
                <ul className="list-group shadow">
                    {props.fullList.map((item) => {
                        return <Products key={item.pID} pStock={item.stock} pID={item.pID} pName={item.pName} desc={item.desc} isAvaliable={item.isAvailable} image={item.image} price={item.price}/>
                    })}
                </ul>
            </div> 
        </div>
    )
}

export default productsList;