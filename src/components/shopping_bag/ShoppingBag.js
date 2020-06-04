import React, { Component } from 'react'
import axios from 'axios';
import { BOOK_URL } from '../../constants';

class ShoppingBag extends Component {

    constructor(props) {
        super(props)
        this.state = {
             book: {}
        }
    }
    getBookDetails(book_id){
        axios.get(`${BOOK_URL}/${book_id}`)
        .then(res => {
            const book = res.data;
            if(this.state.book.id !== book_id) {
                this.setState({ book });
            }
        })
        .catch((err)=> console.log(err))
    }
    componentDidUpdate(){
        this.getBookDetails(this.props.book_id);
    }
    
    render() {
        return (
            <div>
                <h2> Shopping Bag </h2>
                <h6>{this.state.book.title}</h6>
                <div className="img-div">
                    <img src={this.state.book.image} alt="cart products"/>
                </div>
                <h6> Quantity : {this.props.quantity} </h6>
            </div>
        )
    }
}

export default ShoppingBag
