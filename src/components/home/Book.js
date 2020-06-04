import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { CART_URL } from '../../constants';
class Book extends Component {
    constructor(props) {
        super(props);
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
    }

    handleAddtoCart(id) {
        axios.post(CART_URL, {
            book_id: id,
            quantity: 1
        })
        .then(res => {
        alert("Book is added to Cart... goto Cart!");
    })
    .catch((err)=> console.log(err))
        
    }
    
    render() {
        const { id, title, description, image } = this.props;
        return (
                    <div className="card cardStyle">
                        <img className="card-img-top" src={image} height="200px" alt="Book cover"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/book/${id}`}>{title}</Link>
                                </h5>
                                <p className="card-text">{`${description}`.substring(0,35).concat(' ...')}</p>
                                <button className="btn btn-primary" onClick={() => this.handleAddtoCart(id)}>Add to cart</button>
                            </div>
                    </div>
        )
    }
}

export default Book
