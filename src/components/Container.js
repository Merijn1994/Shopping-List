import React, {Component} from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                {id: 1, title: "Eieren"},
                {id: 2, title: "Kwark"},
                {id: 3, title: "Brood"},
                {id: 4, title: "Fruit"},

            ],
            shoppingListItems: [
                {id: 5, title: "Breakers", amount: 4},
                {id: 6, title: "Snacks", amount: 2},
            ]
        }
    }

    addAmountToItem = (item, amount) => {
        this.setState({
            shoppingListItems: this.state.shoppingListItems.map(listItem => {
                if (listItem.title === item.title) {
                    return {
                        id: listItem.id,
                        title: listItem.title,
                        amount: listItem.amount + amount,
                    }
                }
                return listItem
            })
        })
    }

    addGroceryItemToCart = item => {
        if (
            this.state.shoppingListItems
            .map(item => item.title)
            .includes(item.title)
        ) {
            this.addAmountToItem(item, 1)
        } else {
        this.setState({
            shoppingListItems: [
                ...this.state.shoppingListItems,
                {
                    id:item.id,
                    title:item.title,
                }
            ]
        })
        }
    }

    emptyCart = () => {
        this.setState({
            shoppingListItems: []
        })
    }

    addItemToGroceryList = (title) => {
        this.setState({
            groceryItems: [
                ...this.state.groceryItems,
                {
                    id: 
                    this.state.groceryItems.length +
                    this.state.shoppingListItems.length +
                    1,
                    title: title,
                    amount: 1,
                }
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Grocery List</h1>
                </header>
                <main>
                    <GroceryList 
                        items={this.state.groceryItems}
                        onItemClick={this.addGroceryItemToCart}
                        onItemAdd={this.addItemToGroceryList}
                    />
                    <ShoppingCart 
                        items={this.state.shoppingListItems}
                        onEmptyClick={this.emptyCart}
                    />                    
                </main>
            </div>
        )
    }
}

export default Container