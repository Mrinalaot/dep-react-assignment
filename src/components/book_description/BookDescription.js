import React, { Component } from 'react';
import Header from '../shared/Header';
import axios from 'axios';
import { BOOK_URL, CART_URL } from '../../constants';
import { Redirect} from "react-router-dom";
import './BookDescription.css';

export class BookDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:  this.props.match.params.id,
            navigateToCart: false,
            book: {}
        }
    }

    
    componentDidMount() {
        axios.get(`${BOOK_URL}/${this.state.id}`)
        .then(res => {
            const book = res.data;
            this.setState({ book });
            console.log(this.state.book);
        })
        .catch((err)=> console.log(err))
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
    
    handleBuyNow(id){
        axios.post(CART_URL, {
            book_id: id,
            quantity: 1
        })
        .then(res => {
            this.setState({
                navigateToCart : true
            });
    })
    .catch((err)=> console.log(err))  
    }

    render() {
        if (this.state.navigateToCart === true) {
            return <Redirect to='/cart' />
          }
        return (
            <div>
                <Header display={this.state.book.title}/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={this.state.book.image} alt="book cover" />
                        </div>
                        <div className="col">
                            <h2> {this.state.book.title} </h2>
                            <h4> Book Price: {this.state.book.price}</h4>
                            <h4> Auther: {this.state.book.author} </h4>
                            <h4> Page Count: {this.state.book.page_count} </h4>
                            <div className="btn-div">
                                <button className="btn btn-primary" onClick={() => this.handleAddtoCart(this.state.book.id)}> Add to Cart </button>
                                <button className="btn btn-success" onClick={() => this.handleBuyNow(this.state.book.id)}> Buy Now </button>
                            </div>
                            <p> {this.state.book.description}</p>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDescription
