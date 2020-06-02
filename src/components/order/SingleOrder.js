import React, { Component } from 'react'
import OrderItem from './OrderItem'

class SingleOrder extends Component {
    
    render() {
        return (
            <div>
                {
                    this.props.items.map(
                        (item, index) => 
                          <OrderItem key={index} 
                          status={this.props.status}
                          orderDate={this.props.orderDate} 
                          title={item.title}
                          author={item.author}
                          quantity={item.quantity}
                          image={item.image}
                          price={item.price}></OrderItem>
                      )
                }
            </div>
            
        )
    }
}

export default SingleOrder
