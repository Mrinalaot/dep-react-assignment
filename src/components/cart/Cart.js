import React, { Component } from 'react'
import Header from '../shared/Header'
import Address from '../address/Address'
import './Cart.css';


class Cart extends Component {
    render() {
        return (
            <div>
                <Header display="Cart"/>  
                <div className="row">
                  <div className="col">
                       <Address />
                  </div>
                  <div className="col">
                        Cart
                   </div>
                 </div>
            </div>
        )
    }
}

export default Cart
