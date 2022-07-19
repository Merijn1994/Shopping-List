import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component {
    render() {
        return (
            <div>
                <ul className="app-list">
                    {this.props.items.map(item => 
                        <ListItem 
                            key={item.id}
                            item={item}
                            clickItem={() => this.props.onItemClick(item)}
                            showQuantities={this.props.showQuantities}
                        />
                        )}
                </ul>
            </div>
        )
    }
}



export default List