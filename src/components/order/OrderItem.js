import React, { Component } from 'react';
import './OrderItem.css';

class OrderItem extends Component {
    render() {
        const { status, orderDate, quantity, image, title, author, price} = this.props;
        return (
                <div className="card">
                <div className="card-header">
                    <div>Order Placed: {orderDate}</div>
                    <div>Status: {status}</div>
                </div>
                <div className="card-body">
                    <div className="img-box">
                        <img src={image} alt="order item"/>
                    </div>
                    <div className="book-details">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> Author: {author}</p>
                        <p className="card-text"> Book price: {price}</p>
                        <p className="card-text"> Quantity: {quantity}</p>
                    </div>
                </div>
                </div>
        )
    }
}

export default OrderItem
