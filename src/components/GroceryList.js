import List from "./List";
import InputField from "./InputField";

function GroceryList ({ items, onItemClick, onItemAdd }) {
    return(
        <div className="grocery-list">
            <h2>Shopping List</h2>
            <InputField onSubmit={onItemAdd}/>
            <List items= {items} onItemClick= {onItemClick}/>
        </div>
    )
}

export default GroceryList