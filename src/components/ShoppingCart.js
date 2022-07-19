import List from "./List";

function ShoppingCart ( {items, onEmptyClick} ) {
    return(
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <button onClick={onEmptyClick} >Empty the shopping cart</button>
            <List items={items} showQuantities={true}/>
        </div>
    )   
}

export default ShoppingCart