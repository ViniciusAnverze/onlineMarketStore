import './FilterProduct.css'

function FilterProduct(props){

    function liftAvailable(event){
        props.getAvailable(event.target.value)
    }

    return(
        <div className="filter-area col-md-2">
            <select onChange={liftAvailable} className='available' name="isAvailable">
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    )
}

export default FilterProduct;